<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    public function winner(){
        $this->hasOne(GameWinner::class);
    }
}
