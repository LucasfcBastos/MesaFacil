<?php

namespace App\Http\Controllers;

use App\Models\City;

class CitiesController extends Controller
{
    public function index()
    {
        $states = City::all();

        return response()->json($states);
    }

    public function byState($state_id)
    {
        $cities = City::where('id_state', $state_id)->get();

        return response()->json($cities);
    }
}
