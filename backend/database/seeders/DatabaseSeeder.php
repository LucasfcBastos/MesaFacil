<?php

namespace Database\Seeders;

use Database\Seeders\{
    StandardSeeder,
    LocationSeeder,
    TemplateSeeder
};
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        $this->call([
            StandardSeeder::class,
            LocationSeeder::class,
            TemplateSeeder::class
        ]);
    }
}
