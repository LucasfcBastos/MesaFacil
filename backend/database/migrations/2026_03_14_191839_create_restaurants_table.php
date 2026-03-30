<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('restaurants', function (Blueprint $table) {
            $table->id();
            $table->string('logo')->nullable();
            $table->string('restaurant_name')->nullable();
            $table->mediumText('description')->nullable();
            $table->decimal('price', 10, 2)->nullable();
            $table->unsignedBigInteger('id_user');
            $table->unsignedBigInteger('id_cuisine')->nullable();
            $table->timestamps();

            $table->foreign('id_user')->references('id')->on('users');
            $table->foreign('id_cuisine')->references('id')->on('cuisines');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('restaurants');
    }
};
