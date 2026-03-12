<?php

namespace Database\Seeders;

use Database\Seeders\{
    ProfileSeeder,
    LocationSeeder
};
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        $this->call([
            ProfileSeeder::class,
            LocationSeeder::class,
        ]);
    }
}
