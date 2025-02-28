<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assessment extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'assessment_date',
        'qualification',
        'qualification2',
        'qualification3',
        'qualification4',
        'no_of_pax',
        'no_of_pax2',
        'no_of_pax3',
        'no_of_pax4',
	'training_status',
    'training_status2',
    'training_status3',
    'training_status4',
        'type_of_scholar',
        'type_of_scholar2',
        'type_of_scholar3',
        'type_of_scholar4',
        'type_of_non_scholar',
        'type_of_non_scholar2',
        'type_of_non_scholar3',
        'type_of_non_scholar4',
	'status',
        'eltt',
        'eltt2',
        'eltt3',
        'eltt4',
        'rfftp',
        'rfftp2',
        'rfftp3',
        'rfftp4',
        'oropfafns',
        'oropfafns2',
        'oropfafns3',
        'oropfafns4',
        'sopcctvr',
        'sopcctvr2',
        'sopcctvr3',
        'sopcctvr4',
    ];

    /**
     * Get the user who created the assessment.
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}