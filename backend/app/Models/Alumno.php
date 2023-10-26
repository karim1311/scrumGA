<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\Casts\Attribute;

class Alumno extends Model
{
    use HasFactory;

    protected function nombre(): Attribute
    {
        return new Attribute(
            set: function($value){
                return strtolower($value);
            }
        );
    }

    protected function apellido(): Attribute
    {
        return new Attribute(
            set: function($value){
                return strtolower($value);
            }
        );
    }
}
