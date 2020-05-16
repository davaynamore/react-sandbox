<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\User as UserResource;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{


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
