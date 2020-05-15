<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserCart extends Model
{
    protected $guarded = [];

    public function myUser(){
        return $this->belongsTo(User::class, 'id');
    }
}
