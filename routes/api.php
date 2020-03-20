<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/missions', 'MissionController@index');

Route::post('/missions', 'MissionController@store');
Route::post('/missions/{mission}', 'MissionController@update');
Route::post('/missions/{mission}/finish', 'MissionController@finish');
Route::delete('/missions/{mission}', 'MissionController@destroy');

Route::post('/missions/{mission}/tasks', 'TaskController@store');
Route::post('/missions/{mission}/tasks/{task}', 'TaskController@update');
Route::post('/missions/{mission}/tasks/{task}/finish', 'TaskController@finish');
Route::delete('/missions/{mission}/tasks/{task}', 'TaskController@destroy');

