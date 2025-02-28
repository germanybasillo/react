<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('assessments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); 
		$table->date('assessment_date');
		$table->string('qualification');
        $table->string('qualification2')->default('N/A')->nullable();
        $table->string('qualification3')->default('N/A')->nullable();
        $table->string('qualification4')->default('N/A')->nullable();
		$table->string('no_of_pax');
        $table->string('no_of_pax2')->default('N/A')->nullable();
        $table->string('no_of_pax3')->default('N/A')->nullable();
        $table->string('no_of_pax4')->default('N/A')->nullable();
		$table->enum('training_status', ['scholar','non-scholar'])->default('scholar');
        $table->enum('training_status2', ['scholar', 'non-scholar', 'N/A'])->default('N/A')->nullable();
        $table->enum('training_status3', ['scholar', 'non-scholar', 'N/A'])->default('N/A')->nullable();
        $table->enum('training_status4', ['scholar', 'non-scholar', 'N/A'])->default('N/A')->nullable();
		$table->enum('status', ['pending', 'approved', 'disapproved'])->default('pending');
		$table->string('type_of_scholar')->nullable();
        $table->string('type_of_scholar2')->default('N/A')->nullable();
        $table->string('type_of_scholar3')->default('N/A')->nullable();
        $table->string('type_of_scholar4')->default('N/A')->nullable();
        $table->string('type_of_non_scholar')->nullable();
        $table->string('type_of_non_scholar2')->default('N/A')->nullable();
        $table->string('type_of_non_scholar3')->default('N/A')->nullable();
        $table->string('type_of_non_scholar4')->default('N/A')->nullable();
		$table->string('eltt');
        $table->string('eltt2')->default('N/A')->nullable();
        $table->string('eltt3')->default('N/A')->nullable();
        $table->string('eltt4')->default('N/A')->nullable();    
		$table->string('rfftp');
        $table->string('rfftp2')->default('N/A')->nullable();
        $table->string('rfftp3')->default('N/A')->nullable();
        $table->string('rfftp4')->default('N/A')->nullable();
		$table->string('oropfafns')->nullable();
        $table->string('oropfafns2')->nullable();
        $table->string('oropfafns3')->nullable();
        $table->string('oropfafns4')->nullable();
		$table->string('sopcctvr');
        $table->string('sopcctvr2')->default('N/A')->nullable();
        $table->string('sopcctvr3')->default('N/A')->nullable();
        $table->string('sopcctvr4')->default('N/A')->nullable();
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assessments');
    }
};
