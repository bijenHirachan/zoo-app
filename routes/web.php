<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservationController;
use App\Models\Day;
use App\Models\Schedule;
use Carbon\Carbon;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
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

Route::get('/', function (Request $request) {
    $day = Day::find($request->query("day"));

    return Inertia::render('Welcome', [
        "days" => Day::with("schedules")->get(),
        "schedules" => $day ? $day->schedules : collect()
    ]);
});

Route::post("/reservations", [ReservationController::class, "store"]);

Route::get('/dashboard', function (Request $request) {

    return Inertia::render('Dashboard',[
        "daysSelector" => Day::pluck("day"),
        "days" => Day::whereBetween('day', [$request->query('startDate'), $request->query('endDate')])->withCount("reservations")->get()
    ]);
})->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
