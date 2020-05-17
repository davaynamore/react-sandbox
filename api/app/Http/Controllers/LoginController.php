<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\User as UserResource;
use Illuminate\Support\Facades\Auth;

/**
 * @group Login
 *
 * APIs for managing auth
 */
class LoginController extends Controller
{


    /**
     * @bodyParam email string required Email . Example: email@gmail.com
     * @bodyParam password string required Password . Example: my25strong*&password
     * @bodyParam name string The first name of the user. Example: John Doe
     *
     * @response 201 {
     *  "access_token": "token string",
     *  "token_type": "bearer",
     *  "expires_in": 3600,
     *  "user": {
     *    "id": 1,
     *    "name": "John Doe",
     *    "email": "email@email.com",
     *    "updated_at": "2020-05-17T06:47:31.000000Z",
     *    "created_at": "2020-05-17T06:47:31.000000Z"
     * }
     * }
     * @response 400 {
     *  "message": "The email address you have entered is already registered"
     * }
     */
    public function register(Request $request): JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'email' => 'unique:users'
        ]);
        if ($validator->fails()) {
            return response()->json(
                ['error' => config('messages.wrong_email')], 400);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = auth()->attempt([
            'email' => $request->email,
            'password' => $request->password,
        ]);

        $user = new UserResource($user);

        return $this->respondWithToken($token, $user);
    }

    protected function respondWithToken($token, $user = null)
    {
        $userResponse = $user ? compact('user') : '';
        return response()->json(array_merge([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $this->guard()->factory()->getTTL() * 60,
        ], $userResponse))->setStatusCode(self::HTTP_CREATED);
    }

    protected function guard()
    {
        return Auth::guard();
    }
}

//*  "user": {
//    *      "id": 8
//    *      "name": "TestUser",
//     *      "email": "test1@test.net",
//     *      "updated_at": "2020-05-17T06:47:31.000000Z",
//     *      "created_at": "2020-05-17T06:47:31.000000Z"
//    *      }
