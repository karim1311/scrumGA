<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use Illuminate\Http\Request;

class AlumnoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Alumno::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $alumno = new Alumno();
        $alumno->dni = $request->dni;
        $alumno->nombre = $request->nombre;
        $alumno->apellido = $request->apellido;
        $alumno->fecha_nacimiento = $request->fecha_nacimiento;
        $alumno->grupo_id = $request->grupo_id;
        $request->validate([
            'nombre' => 'required|string|max:255',
            'grupo_id' => 'required|numeric|min:1|max:4',
        ]);
        $alumno->save();
        return "Alumno guardado correctamente";
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $alumno = Alumno::find($id);
        return response()->json($alumno);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Alumno $alumno)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $alumno = Alumno::find($id);
        $alumno->dni = $request->input('dni');
        $alumno->nombre = $request->input('nombre'); // Actualizar otros campos$alumno->save();
        $alumno->apellido = $request->input('apellido');
        $alumno->fecha_nacimiento = $request->input('fecha_nacimiento');
        $alumno->grupo_id = $request->input('grupo_id');
        $alumno->save();
        return response()->json($alumno);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $alumno = Alumno::find($id);
        $alumno->delete();
        return "Alumno eliminado correctamente";
    }
}
