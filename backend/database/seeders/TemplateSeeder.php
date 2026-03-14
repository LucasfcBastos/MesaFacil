<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TemplateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Consumidor',
                'email' => 'consumidor@example.com',
                'phone_number' => '1234567890',
                'social_security_number' => '123-45-6789',
                'password' => bcrypt('consumidor123'),
                'id_city' => 5539,
                'id_profile' => 1
            ],
            [
                'name' => 'Restaurante',
                'email' => 'restaurante@example.com',
                'phone_number' => '0987654321',
                'social_security_number' => '987-54-3210',
                'password' => bcrypt('restaurante123'),
                'id_city' => 5340,
                'id_profile' => 2
            ]
        ];

        DB::table('users')->insert($users);
    }
}
