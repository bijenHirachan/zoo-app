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
          foreach(range(1,5) as $item){
            Reservation::create([
                'day_id' => $item,
                'schedule_id' => rand(1, 270),
                'first_name' => fake()->firstName(),
                'last_name' => fake()->lastName(),
                'subscription_number' => null
            ]);
          }
          foreach(range(1,10) as $item){
            Reservation::create([
                'day_id' => $item,
                'schedule_id' => rand(1, 270),
                'first_name' => fake()->firstName(),
                'last_name' => fake()->lastName(),
                'subscription_number' => null
            ]);
          }
          foreach(range(3,25) as $item){
            Reservation::create([
                'day_id' => $item,
                'schedule_id' => rand(1, 270),
                'first_name' => fake()->firstName(),
                'last_name' => fake()->lastName(),
                'subscription_number' => null
            ]);
          }
          foreach(range(2,30) as $item){
            Reservation::create([
                'day_id' => $item,
                'schedule_id' => rand(1, 270),
                'first_name' => fake()->firstName(),
                'last_name' => fake()->lastName(),
                'subscription_number' => null
            ]);
          }
          foreach(range(8,14) as $item){
            Reservation::create([
                'day_id' => $item,
                'schedule_id' => rand(1, 270),
                'first_name' => fake()->firstName(),
                'last_name' => fake()->lastName(),
                'subscription_number' => null
            ]);
          }
          foreach(range(15,28) as $item){
            Reservation::create([
                'day_id' => $item,
                'schedule_id' => rand(1, 270),
                'first_name' => fake()->firstName(),
                'last_name' => fake()->lastName(),
                'subscription_number' => null
            ]);
          }
   
    

        }
    }
}
