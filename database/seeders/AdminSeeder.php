<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User; // Change this to your admin model
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('admin@123'),
            'role' => 'admin', // If you have a role field
            'logo' => 'images/bg.png', // If you have a logo field
        ]);
    }
}