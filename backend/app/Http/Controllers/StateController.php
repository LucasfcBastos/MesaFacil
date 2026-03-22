<?php

namespace App\Http\Controllers;

use App\Models\State;

class StateController extends Controller
{
    public function index()
    {
        $states = State::all();

        return response()->json($states);
    }

    public function whereStates($state_id)
    {
        $cities = State::find($state_id);

        return response()->json($cities);
    }
}
