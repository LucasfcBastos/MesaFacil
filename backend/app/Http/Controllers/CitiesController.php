<?php

namespace App\Http\Controllers;

use App\Models\City;

class CitiesController extends Controller
{
    public function byState($state_id)
    {
        $cities = City::where('id_state', $state_id)->get();

        return response()->json($cities);
    }

    public function whereCities($city_id)
    {
        $cities = City::find($city_id);

        return response()->json($cities);
    }
}
