<?php

namespace Database\Seeders;

use App\Models\Reservation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReservationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach(range(1,30) as $number){
          foreach(range(1,20) as $item){
            Reservation::create([
                'day_id' => $number,
                'schedule_id' => rand(1, 270),
                'first_name' => fake()->firstName(),
                'last_name' => fake()->lastName(),
                'subscription_number' => null
            ]);
          }
        }
    }
}
