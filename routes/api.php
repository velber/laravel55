<?php

use Illuminate\Http\Request;

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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});


$api = app('Dingo\Api\Routing\Router');
$api->version('v1', function ($api) {
    $api->resource('lessons', 'App\Http\Controllers\LessonsController');
});
$api->version('v2', ['previx' => 'v2'], function ($api) {
    $api->resource('v2/lessons', 'App\Http\Controllers\LessonsController');
});
