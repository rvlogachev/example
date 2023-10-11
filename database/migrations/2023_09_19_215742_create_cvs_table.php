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
        Schema::create('cvs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->index()->constrained('users');
            $table->integer('status')->default(0);
            $table->string('title');
            $table->string('photo_url')->nullable();
            $table->string('href')->nullable();
            $table->string('name')->nullable();
            $table->string('address')->nullable();
            $table->string('phone')->nullable();
            $table->string('username')->nullable();
            $table->string('email')->nullable();
            $table->string('description')->nullable();
            $table->text('professional_summary')->nullable();
            $table->json('hobbies')->nullable();
            $table->foreignId('template_id')->index()->constrained('templates');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cvs');
    }
};
