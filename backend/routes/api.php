<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    StateController,
    ProfileController,
    CitiesController,
    UserController,
    RestaurantController,
    CuisineController
};

Route::get('/states', [StateController::class, 'index']);
Route::get('/cities/{state}', [CitiesController::class, 'byState']);
Route::get('/profiles', [ProfileController::class, 'index']);
Route::post('/register_authentic', [UserController::class, 'register']);
Route::post('/login_authentic', [UserController::class, 'login']);
Route::post('/register/{id}', [RestaurantController::class, 'create']);

Route::middleware('auth:sanctum')->group(function () {    
    Route::get('/exibir/{id}', [RestaurantController::class, 'view']);
    Route::put('/atualizar/{id}', [RestaurantController::class, 'update']);
    Route::get('/listar', [RestaurantController::class, 'viewList']);

    Route::get('/cuisines', [CuisineController::class, 'index']);

    Route::get('where/user/{id}', [UserController::class, 'whereUser']);
    Route::get('where/states/{id}', [StateController::class, 'whereStates']);
    Route::get('where/cities/{id}', [CitiesController::class, 'whereCities']);
    Route::get('where/cuisine/{id}', [CuisineController::class, 'whereCuisines']);
});