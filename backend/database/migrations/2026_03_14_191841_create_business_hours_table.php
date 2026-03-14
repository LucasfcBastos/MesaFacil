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
        Schema::create('business_hours', function (Blueprint $table) {
            $table->id();
            $table->time('opening_time');
            $table->time('closing_time');
            $table->unsignedBigInteger('id_restaurant');
            $table->unsignedBigInteger('id_week');
            $table->timestamps();

            $table->foreign('id_restaurant')->references('id')->on('restaurants');
            $table->foreign('id_week')->references('id')->on('weeks');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('business_hours');
    }
};
