import 'package:flutter/material.dart';

class HomeView extends StatelessWidget {
  const HomeView({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("SSUBlog")),
      body: const Center(
        child: Text("Welcome to the SSUBlog Home!"),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.pushNamed(context, '/postForm');
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
