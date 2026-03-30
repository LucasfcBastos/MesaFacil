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

        $cuisines = [
            ['name' => 'Hamburgueria'],
            ['name' => 'Pizzaria'],
            ['name' => 'Churrascaria'],
            ['name' => 'Espetinho'],
            ['name' => 'Frango Frito'],
            ['name' => 'Pastelaria'],
            ['name' => 'Sushi'],
            ['name' => 'Lanches'],
            ['name' => 'Comida Caseira'],
            ['name' => 'Marmita'],
            ['name' => 'Prato Feito'],
            ['name' => 'Padaria'],
            ['name' => 'Cafeteria'],
            ['name' => 'Brunch'],
            ['name' => 'Doces'],
            ['name' => 'Confeitaria'],
            ['name' => 'Açaí'],
            ['name' => 'Sorveteria'],
            ['name' => 'Comida Vegana'],
            ['name' => 'Comida Vegetariana'],
            ['name' => 'Comida Fitness'],
            ['name' => 'Comida Low Carb'],
            ['name' => 'Comida Sem Glúten'],
            ['name' => 'Comida Sem Lactose'],
            ['name' => 'Comida Orgânica'],
            ['name' => 'Comida Natural'],
            ['name' => 'Comida Funcional'],
            ['name' => 'Comida Gourmet'],
            ['name' => 'Comida Rápida'],
            ['name' => 'Comida de Rua'],
            ['name' => 'Comida Internacional'],
            ['name' => 'Comida Regional'],
            ['name' => 'Comida Nordestina'],
            ['name' => 'Comida Baiana'],
            ['name' => 'Comida Mineira'],
            ['name' => 'Comida Gaúcha'],
            ['name' => 'Comida Carioca'],
            ['name' => 'Comida Paulista'],
            ['name' => 'Bar'],
            ['name' => 'Pub'],
            ['name' => 'Boteco'],
            ['name' => 'Choperia'],
            ['name' => 'Cervejaria'],
            ['name' => 'Food Truck'],
            ['name' => 'Hot Dog'],
            ['name' => 'Massas'],
            ['name' => 'Sopas'],
            ['name' => 'Saladas'],
            ['name' => 'Sanduíches'],
            ['name' => 'Tapioca'],
            ['name' => 'Açaí na Tigela'],
            ['name' => 'Crepes'],
            ['name' => 'Panquecas'],
            ['name' => 'Bolos'],
            ['name' => 'Tortas'],
            ['name' => 'Pudins'],
        ];

        DB::table('cuisines')->insert($cuisines);
    }
}