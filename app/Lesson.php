<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{
    protected $fillable = ['title', 'body', 'some_bool'];

    protected $hidden = ['created_at', 'updated_at'];
}