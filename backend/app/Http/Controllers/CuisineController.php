<?php

namespace App\Http\Controllers;

use App\Models\Cuisine;
use Illuminate\Http\Request;

class CuisineController extends Controller
{
    public function index()
    {
        $cuisines = Cuisine::all();

        return response()->json($cuisines);
    }

    public function whereCuisines($id)
    {
        $cuisines = Cuisine::find($id);

        return response()->json($cuisines);
    }
}
