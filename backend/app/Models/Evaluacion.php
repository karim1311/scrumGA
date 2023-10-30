<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Casts\Attribute;

class Evaluacion extends Model
{
    use HasFactory;
    protected $table = "evaluaciones";

    protected function descripcion(): Attribute
    {
        return new Attribute(
            set: function($value){
                return strtolower($value);
            }
        );
    }
}
