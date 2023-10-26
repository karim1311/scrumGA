<?php

namespace App\Http\Controllers;

use App\Models\Calificacion;
use Illuminate\Http\Request;

class CalificacionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Calificacion::all();
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
        $calificacion = new Calificacion();
        $calificacion->alumno_id = $request->alumno_id;
        $calificacion->evaluacion_id = $request->evaluacion_id;
        $calificacion->nota = $request->nota;
        $calificacion->mensaje = $request->amensaje;
        $calificacion->save();
        return "Calificacion guardada correctamente";
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Calificacion::where('id',$id)->get();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Calificacion $calificacion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $calificaciones = Calificacion::all();
        $califiacion = $calificaciones->find($id);
        $califiacion->alumno_id = $request->alumno_id;
        $califiacion->evaluacion_id = $request->evaluacion_id;
        $califiacion->nota = $request->nota;
        $califiacion->mensaje = $request->mensaje;
        $califiacion->save();
        return $califiacion;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $califiacion = Calificacion::find($id);
        $califiacion->delete();
        return "Calificacion eliminada correctamente";
    }
}
