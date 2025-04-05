import 'package:flutter/material.dart';
import 'package:firebase_core/firebase_core.dart';
import 'routes/app_routes.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
  runApp(const SSUBlogApp());
}

class SSUBlogApp extends StatelessWidget {
  const SSUBlogApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
    title: 'SSUBlog',
    theme: ThemeData(primarySwatch: Colors.indigo),
    initialRoute: AppRoutes.login,
    routes: AppRoutes.routes,
    );
  }
}
