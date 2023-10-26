<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('calificaciones', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('alumno_id');
            $table->unsignedBigInteger('evaluacion_id');
            $table->float('nota');
            $table->string('mensaje');
            $table->foreign('alumno_id')->references('id')->on('alumnos')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('evaluacion_id')->references('id')->on('evaluaciones')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('calificacions');
    }
};
