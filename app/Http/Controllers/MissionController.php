<?php

namespace App\Http\Controllers;

use App\Mission;
use Illuminate\Http\Request;

class MissionController extends Controller
{
    public function index()
    {
        return Mission::orderBy('finished', 'asc')->with('tasks')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $mission = Mission::create([
            'name' => $request->input('name')
        ]);

        return $mission->fresh();
    }

    public function update($mission, Request $request)
    {
        $mission = Mission::findOrFail($mission);

        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $mission->update([
            'name' => $request->input('name')
        ]);

        return $mission;
    }

    public function finish($mission)
    {
        $mission = Mission::findOrFail($mission);

        $mission->finished = true;
        $mission->save();

        return $mission;
    }

    public function destroy($mission)
    {
        $mission = Mission::findOrFail($mission);

        $mission->delete();
    }
}
