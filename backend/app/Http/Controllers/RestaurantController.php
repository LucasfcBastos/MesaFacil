<?php

namespace App\Http\Controllers;

use App\Models\Restaurant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class RestaurantController extends Controller
{
    public function create($user_id)
    {
        
        $user = Restaurant::create([
            'logo' => null,
            'restaurant_name' => null,
            'description' => null,
            'price' => null,
            'id_user' => $user_id,
            'id_cuisine' => null
        ]);

        return response()->json([
            'message' => 'Restaurante criado com sucesso',
            'restaurant' => $user
        ], 201);

    }

    public function view($id)
    {
        $restaurant = Restaurant::where('id_user', $id)->first();

        if (!$restaurant) {
            return response()->json([
                'message' => 'Restaurante não encontrado'
            ], 404);
        }

        return response()->json([
            'logo' => $restaurant->logo,
            'restaurant_name' => $restaurant->restaurant_name,
            'description' => $restaurant->description,
            'price' => $restaurant->price,
            'id_cuisine' => $restaurant->id_cuisine
        ], 200);
    }

    public function update(Request $request, $id)
    {
        $restaurant = Restaurant::where('id_user', $id)->first();
    
        $request->validate([
            'logo' => 'nullable|image|mimes:png,jpg,jpeg|max:2048',
            'restaurant_name' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'price' => 'nullable|numeric',
            'id_cuisine' => 'nullable|exists:cuisines,id',
        ]);

        // 🔥 Se tiver imagem nova
        if ($request->hasFile('logo')) {

            // Deleta a antiga (se existir)
            if ($restaurant->logo) {
                Storage::disk('public')->delete($restaurant->logo);
            }

            $image = $request->file('logo');

            // Compressão + resize
            $img = Image::make($image)
                ->resize(300, 300, function ($constraint) {
                    $constraint->aspectRatio();
                })
                ->encode('jpg', 75);

            $path = 'logos/' . uniqid() . '.jpg';

            Storage::disk('public')->put($path, $img);

            $restaurant->logo = $path;
        }

        // Atualiza outros campos
        $restaurant->restaurant_name = $request->restaurant_name ?? $restaurant->restaurant_name;
        $restaurant->description = $request->description ?? $restaurant->description;
        $restaurant->price = $request->price ?? $restaurant->price;
        $restaurant->id_cuisine = $request->id_cuisine ?? $restaurant->id_cuisine;

        $restaurant->save();

        return response()->json([
            'message' => 'Restaurante atualizado com sucesso',
            'restaurant' => $restaurant
        ], 200);

    }
}
