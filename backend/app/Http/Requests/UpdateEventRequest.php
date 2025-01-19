<?php

namespace App\Http\Requests;

use App\Models\Event;
use Illuminate\Foundation\Http\FormRequest;

class UpdateEventRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $event = Event::find($this->route('event'));
        return $this->user()->role === 'admin' || $this->user()->id === $event->owner_id;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'location' => 'required|string|max:255',
            'max_participants' => 'required|integer|unsigned',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'owner_id' => 'required|integer|exists:users,id',
        ];
    }
}
