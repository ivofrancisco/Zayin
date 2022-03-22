<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\GalleryPageController;
use App\Http\Controllers\GalleryController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// List of all galleries (admin)
Route::get('/galleries', [GalleryController::class, 'index'])->name('manage.galleries');

// Store new gallery
Route::post('/create', [GalleryController::class, 'store'])->name('manage.store');

// Edit gallery
Route::get('/edit/{id}', [GalleryController::class, 'edit'])->name('manage.edit');

// Update gallery
Route::post('/update/{id}', [GalleryController::class, 'update'])->name('manage.update');

// Delete gallery
Route::post('/delete/{id}', [GalleryController::class, 'destroy'])->name('manage.delete');