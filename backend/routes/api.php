<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    StateController,
    ProfileController,
    CitiesController,
    UserController
};

Route::get('/states', [StateController::class, 'index']);
Route::get('/cities/{state}', [CitiesController::class, 'byState']);
Route::get('/profiles', [ProfileController::class, 'index']);
Route::post('/register_authentic', [UserController::class, 'register']);
Route::post('/login_authentic', [UserController::class, 'login']);