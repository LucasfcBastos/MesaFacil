<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StandardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $profiles = [
            ['type' => 'Consumidor'],
            ['type' => 'Restaurante']
        ];

        DB::table('profiles')->insert($profiles);

        $weeks = [
            ['day_name' => 'Segunda-feira'],
            ['day_name' => 'Terça-feira'],
            ['day_name' => 'Quarta-feira'],
            ['day_name' => 'Quinta-feira'],
            ['day_name' => 'Sexta-feira'],
            ['day_name' => 'Sábado'],
            ['day_name' => 'Domingo']
        ];

        DB::table('weeks')->insert($weeks);
    }
}
