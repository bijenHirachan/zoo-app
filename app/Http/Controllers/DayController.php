<?php

namespace App\Http\Controllers;

use App\Models\Day;
use App\Models\Reservation;
use App\Models\Schedule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DayController extends Controller
{
    public function index()
    {
        return Inertia::render("Days/DayIndex", [
            "days" => Day::with("schedules")->paginate(5)
        ]);
    }

    public function show(Day $day)
    {
        return Inertia::render("Days/ShowDay",[
            "day" => $day->load(["schedules" => function($query){
                $query->withCount("reservations");
            }])
        ]);
    }
}
