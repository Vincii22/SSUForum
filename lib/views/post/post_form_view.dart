import 'package:flutter/material.dart';

class PostFormView extends StatelessWidget {
  const PostFormView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("New Post")),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            const TextField(decoration: InputDecoration(labelText: 'Title')),
            const SizedBox(height: 16),
            const TextField(
              decoration: InputDecoration(labelText: 'Content'),
              maxLines: 5,
            ),
            const SizedBox(height: 24),
            ElevatedButton(
              onPressed: () {},
              child: const Text("Post"),
            ),
          ],
        ),
      ),
    );
  }
}
