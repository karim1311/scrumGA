<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Calificacion>
 */
class CalificacionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'alumno_id'=>fake()->numberBetween(1,15),
            'evaluacion_id'=>fake()->numberBetween(1,5),
            'nota'=>fake()->numberBetween(10,100),
            'mensaje'=>fake()->sentence(),
        ];
    }
}

