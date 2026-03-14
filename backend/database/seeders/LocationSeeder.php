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
               $new_city_id =  DB::table('cities')->insertGetId([
                    'name' => $city['nome'],
                    'id_state' => $new_state_id,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);

                if ($city['nome'] === 'Anápolis') {
                    print("\nAnápolis ID: " . $new_city_id);
                } elseif ($city['nome'] === 'São Francisco de Goiás') {
                    print("\nSão Francisco de Goiás ID: " . $new_city_id);
                }
            }
        }
    }
}
