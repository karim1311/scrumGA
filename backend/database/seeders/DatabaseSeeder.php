<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $alumno = new AlumnoSeeder();
        $alumno->run();

        $tipo = new TipoSeeder();
        $tipo->run();

        $evaluacion = new EvaluacionSeeder();
        $evaluacion->run();

        $calificacion = new CalificacionSeeder();
        $calificacion->run();
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
