<?php

namespace App\Http\Resources\Cv;

use App\Http\Resources\Message\MessageResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CvResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */


    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title ,
            'description' => $this->description ,
            'name' => $this->name,
            'address' => $this->address,
            'phone' => $this->phone,
            'username' => $this->username,
            'photo_url' => $this->photo_url,
            'href' => $this->href,
            'status' => $this->status,
            'email' => $this->email,
            'professional_summary' => $this->professional_summary,
            'hobbies' => $this->hobbies,

        ];
    }
}
