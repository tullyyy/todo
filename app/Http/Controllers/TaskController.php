<?php

namespace App\Http\Controllers;

use App\Mission;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function store($mission, Request $request)
    {
        $mission = Mission::findOrFail($mission);

        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $task = $mission->tasks()->create([
            'name' => $request->input('name')
        ]);

        return $task->fresh();
    }

    public function update($mission, $task, Request $request)
    {
        $mission = Mission::findOrFail($mission);
        $task = $mission->tasks()->findOrFail($task);

        $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $task->update([
            'name' => $request->input('name')
        ]);

        return $task;
    }

    public function finish($mission, $task)
    {
        $mission = Mission::findOrFail($mission);
        $task = $mission->tasks()->findOrFail($task);

        $task->finished = true;
        $task->save();

        return $task;
    }

    public function destroy($mission, $task)
    {
        $mission = Mission::findOrFail($mission);
        $task = $mission->tasks()->findOrFail($task);

        $task->delete();
    }
}
