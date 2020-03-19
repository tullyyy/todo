<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Mission extends Model
{
    use SoftDeletes;

    protected $table = 'missions';

    protected $fillable = [
        'name'
    ];

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
