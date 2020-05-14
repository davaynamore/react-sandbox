<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserResulsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_resuls', function (Blueprint $table) {
            $table->id();
            $table->float('mouse_x');
            $table->float('mouse_y');
            $table->bigInteger('user_id');
            $table->bigInteger('game_id');
            $table->bigInteger('ticket_id');
            $table->string('status')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_resuls');
    }
}
