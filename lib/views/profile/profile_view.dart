import 'package:flutter/material.dart';

class ProfileView extends StatelessWidget {
  const ProfileView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Profile")),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            const CircleAvatar(radius: 40),
            const SizedBox(height: 16),
            const Text("User Name", style: TextStyle(fontSize: 20)),
            const SizedBox(height: 8),
            const Text("user@email.com"),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: () {
                Navigator.pushNamed(context, '/editProfile');
              },
              child: const Text("Edit Profile"),
            ),
            ElevatedButton(
              onPressed: () {
                // Add logout logic here
              },
              child: const Text("Logout"),
            ),
          ],
        ),
      ),
    );
  }
}
