<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProfileSeeder extends Seeder
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
    }
}
