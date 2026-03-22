<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{
    public function create($user_id)
    {
        
        $user = Restaurant::create([
            'logo' => null,
            'restaurant_name' => null,
            'description' => null,
            'id_user' => $user_id
        ]);

        return response()->json([
            'message' => 'Restaurante criado com sucesso',
            'restaurant' => $user
        ], 201);

    }
}
