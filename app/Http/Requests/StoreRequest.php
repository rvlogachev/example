<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'id' => 'integer',
            'title' => 'nullable|string',
            'name' => 'nullable|string',
            'address' => 'nullable|string',
            'phone' => 'nullable|string',
            'username' => 'nullable|string',
            'description' => 'nullable|string',
            'photo_url' => 'nullable|string',
            'href' => 'nullable|string',
            'status' => 'nullable|string',
            'email' => 'nullable|string',
            'professional_summary' => 'nullable|string',
            'hobbies' => 'nullable|string',
        ];
    }
}
