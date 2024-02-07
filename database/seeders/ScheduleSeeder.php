<?php

namespace Database\Seeders;

use App\Models\Schedule;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $date = now()->addDay()->format("Y-m-d");

        foreach(Carbon::parse("$date 9am")->toPeriod("$date 4pm", 60, 'minutes') as $period){
             Schedule::create([
                "day" => $period->format('d/m/Y'),
                "start_time" => $period->format('h:i A'),
                "end_time" => $period->addHour()->format('h:i A')
             ]);
        }

        $date2 = now()->addDays(2)->format("Y-m-d");

        foreach(Carbon::parse("$date2 9am")->toPeriod("$date2 2pm", 60, 'minutes') as $period){
             Schedule::create([
                "day" => $period->format('d/m/Y'),
                "start_time" => $period->format('h:i A'),
                "end_time" => $period->addHour()->format('h:i A')
             ]);
        }

        $date3 = now()->addDays(3)->format("Y-m-d");

        foreach(Carbon::parse("$date3 9am")->toPeriod("$date3 5pm", 60, 'minutes') as $period){
             Schedule::create([
                "day" => $period->format('d/m/Y'),
                "start_time" => $period->format('h:i A'),
                "end_time" => $period->addHour()->format('h:i A')
             ]);
        }
    }
}
