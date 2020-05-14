<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GameWinner extends Model
{
    public function game(){
        return $this->belongsTo(Game::class, 'id');
    }
}
