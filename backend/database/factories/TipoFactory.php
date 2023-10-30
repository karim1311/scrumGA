<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tipo>
 */
class TipoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'descripcion'=>fake()->sentence(),
            'porcentaje'=>fake()->randomElement(['10','30','40']),
            'rango'=>fake()->randomElement(['60','80','100']),
        ];
    }
}

