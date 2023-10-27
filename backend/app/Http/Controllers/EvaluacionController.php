<?php

namespace App\Http\Controllers;

use App\Models\Evaluacion;
use Exception;
use Illuminate\Http\Request;

class EvaluacionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Evaluacion::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
            'descripcion' => 'bail|required|string|max:255',
            'tipo_id' => 'required|numeric',
            'fecha' => 'required|date'
            ]);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()],422);
        }

        $evaluacion = new Evaluacion();
        $evaluacion->descripcion = $request->descripcion;
        $evaluacion->tipo_id = $request->tipo_id;
        $evaluacion->fecha = $request->fecha;
        $evaluacion->save();
        return response()->json("Evaluacion guardada correctamente");
    }

    // hacer que todos los campos sean requeridos, y que en los campos sólo alfabeticos no acepte combinacion con numeros

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Evaluacion::where('id',$id)->get();
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Evaluacion $evaluacion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $evaluaciones = Evaluacion::all();
        $evaluacion = $evaluaciones->find($id);
        $evaluacion->descripcion = $request->descripcion;
        $evaluacion->tipo_id = $request->tipo_id;
        $evaluacion->fecha = $request->fecha;
        $evaluacion->save();
        return $evaluacion;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $evaluacion = Evaluacion::find($id);
        $evaluacion->delete();
        return "Evaluacion eliminada correctamente";
    }
}
