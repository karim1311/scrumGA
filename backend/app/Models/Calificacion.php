<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Casts\Attribute;

class Calificacion extends Model
{
    use HasFactory;
    protected $table = "calificaciones";

    protected function mensaje(): Attribute
    {
        return new Attribute(
            set: function($value){
                return strtolower($value);
            }
        );
    }
}
