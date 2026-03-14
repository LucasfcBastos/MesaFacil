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
        Schema::create('available_tables', function (Blueprint $table) {
            $table->id();
            $table->time('check_in_time');
            $table->time('check_out_time');
            $table->unsignedBigInteger('id_table');
            $table->timestamps();

            $table->foreign('id_table')->references('id')->on('tables');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('available_tables');
    }
};
