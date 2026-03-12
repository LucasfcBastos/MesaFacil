<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\Http;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LocationSeeder extends Seeder
{
    public function run(): void
    {
        $states = Http::get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')->json();

        foreach ($states as $state) {

            $new_state_id = DB::table('states')->insertGetId([
                'name' => $state['nome'],
                'created_at' => now(),
                'updated_at' => now()
            ]);

            $cities = Http::get(
                "https://servicodados.ibge.gov.br/api/v1/localidades/estados/{$state['id']}/municipios"
            )->json();

            foreach ($cities as $city) {
                DB::table('cities')->insert([
                    'name' => $city['nome'],
                    'id_state' => $new_state_id,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);
            }
        }
    }
}
