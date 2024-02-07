<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreReservationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "day" => "required",
            "timeslot" => "required",
            "first_name1" => "required",
            "last_name1" => "required",
            "subscription_number1" => "nullable",
            "first_name2" => "nullable",
            "last_name2" => "sometimes|required_unless:first_name2,null",
            "subscription_number2" => "nullable",
            "first_name3" => "nullable",
            "last_name3" => "sometimes|required_unless:first_name3,null",
            "subscription_number3" => "nullable",
        ];
    }
}
