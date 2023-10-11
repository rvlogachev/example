<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cv extends Model
{
    use HasFactory;

    public $table = 'cvs';
    protected $quarded = false;
    protected $fillable = ['user_id','template_id', 'email'];


}
