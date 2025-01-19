<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

test('test_create_event', function () {
    $admin_user = User::factory()->create(['role' => 'admin']);
    $owner_user = User::factory()->create(['role' => 'admin']);
    $this->actingAs($admin_user);

    $eventData = [
        'name' => 'Test Event',
        'description' => 'Test Description', 
        'location' => 'Test Location', 
        'max_participants' => 100, 
        'start_date' => now(), 
        'end_date' => now()->addDays(1), 
        'owner_id' => $owner_user->id
    ];

    $response = $this->post('/api/events', $eventData);
    $response->assertStatus(201);
    $this->assertDatabaseHas('events', ['name' => 'Test Event']);
});

// public function test_show_event() { $event = Event::factory()->create(); $response = $this->getJson('/api/events/' . $event->id); $response->assertStatus(200); $response->assertJson(['id' => $event->id]); } public function test_update_event() { $event = Event::factory()->create(); $user = User::factory()->create(['role' => 'admin']); $this->actingAs($user); $updateData = [ 'name' => 'Updated Event', 'description' => 'Updated Description', 'location' => 'Updated Location', 'max_participants' => 200, 'start_date' => now(), 'end_date' => now()->addDays(2), 'owner_id' => $user->id, ]; $response = $this->putJson('/api/events/' . $event->id, $updateData); $response->assertStatus(200); $this->assertDatabaseHas('events', ['name' => 'Updated Event']); } public function test_delete_event() { $event = Event::factory()->create(); $response = $this->deleteJson('/api/events/' . $event->id); $response->assertStatus(200); $this->assertDatabaseMissing('events', ['id' => $event->id]); }
