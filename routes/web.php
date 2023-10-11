<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});




Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {

    Route::get('/cvs', [\App\Http\Controllers\CvController::class, 'index'])->name('cvs.index');
    Route::get('/cvs/{cv}', [\App\Http\Controllers\CvController::class,'show'])->name('cvs.show');
    Route::get('/cv/{cv}', [\App\Http\Controllers\CvController::class,'download'])->name('cvs.download');
    Route::post('/cvs', [\App\Http\Controllers\CvController::class, 'store'])->name('cvs.store');
    Route::post('/cv', [\App\Http\Controllers\CvController::class, 'create'])->name('cvs.create');

    Route::get('/test', function () {
        return Inertia::render('Test');
    })->name('test');
});


