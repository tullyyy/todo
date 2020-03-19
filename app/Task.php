<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Task extends Model
{
    use SoftDeletes;

    protected $table = 'tasks';

    protected $fillable = [
        'mission_id',
        'name'
    ];

    public function mission()
    {
        return $this->belongsToMany(Mission::class);
    }
}
