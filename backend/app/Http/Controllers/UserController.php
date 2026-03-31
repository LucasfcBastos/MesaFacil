<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'phone_number' => 'required',
            'social_security_number' => 'required|unique:users',
            'password' => 'required|min:6',
            'id_city' => 'required',
            'id_profile' => 'required'
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'phone_number' => $request->phone_number,
            'social_security_number' => $request->social_security_number,
            'password' => Hash::make($request->password),
            'id_city' => $request->id_city,
            'id_profile' => $request->id_profile
        ]);

        return response()->json([
            'message' => 'Usuário criado com sucesso',
            'user' => $user
        ], 201);

    }
    
    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $user = User::where('email', $request->email)->first();

        if(!$user || !Hash::check($request->password, $user->password)) {

            return response()->json([
                'message' => 'Email ou senha inválidos'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login realizado com sucesso',
            'user' => $user,
            'token' => $token
        ]);

    }

    public function whereUser($user_id)
    {
        $user = User::find($user_id);

        return response()->json($user);
    }

}