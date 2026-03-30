<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    protected $fillable = [
        'logo',
        'restaurant_name',
        'description',
        'price',
        'id_user',
        'id_cuisine',
    ];
}
