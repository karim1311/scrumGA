<?php

namespace App\Http\Middleware;

use App\Models\Calificacion;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ValidarCombinacionUnicaCalificacion
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $campo1, $campo2): Response
    {
        $valorCampo1 = $request->input($campo1);
        $valorCampo2 = $request->input($campo2);

        $combinacionExistente = Calificacion::where($campo1, $valorCampo1)
            ->where($campo2, $valorCampo2)
            ->exists();

        if ($combinacionExistente) {
            return response()->json(['error' => 'Ya se registro la calificacion del alumno este dia. si la vuelvo a registrar se duplicaria la informacion'], 422);
        }
        return $next($request);
    }
}
