<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Alumno>
 */
class AlumnoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'dni' => fake()->randomNumber(8, true),
            'nombre' =>fake()->firstName(),
            'apellido' =>fake()->lastName(),
            'correo' =>fake()->email(),
            'fecha_nacimiento' =>fake()->date(),
            'grupo_id' =>fake()->numberBetween(1,4),
        ];
    }
}


