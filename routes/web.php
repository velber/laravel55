<?php

//
//Route::get('/', function () {
//    return view('welcome');
//});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
//Route::prefix('api/v1')->group(function () {
//    Route::resource('lessons', 'LessonsController');
//});
