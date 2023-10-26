<?php

namespace App\Http\Controllers;

use App\Models\Tipo;
use Illuminate\Http\Request;

class TipoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Tipo::all();
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
        $tipo = new Tipo();
        $tipo->descripcion = $request->descripcion;
        $tipo->porcentaje = $request->porcentaje;
        $tipo->rango = $request->rango;
        $request->validate([
            'descripcion' => 'required|unique|string|alpha:ascii|max:255',
            'porcentaje' => 'required|numeric|min:1|max:100',
            'rango' => 'required|numeric|min:1|max:100',
        ]);
        $tipo->save();
        return "Tipo guardado correctamente";
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $tipo = Tipo::find($id);
        return response()->json($tipo);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tipo $tipo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $tipos = Tipo::all();
        $tipo = $tipos->find($id);
        $tipo->descripcion = $request->descripcion; 
        $tipo->porcentajte = $request->porcentajte; 
        $tipo->rango = $request->rango; 
        $tipo->save();
        return $tipo; 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tipo = Tipo::find($id);
        $tipo->delete();
        return "Tipo eliminado correctamente";
    }
}
