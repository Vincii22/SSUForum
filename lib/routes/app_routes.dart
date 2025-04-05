import 'package:flutter/material.dart';

// Auth Views
import '../views/auth/login_view.dart';
import '../views/auth/register_view.dart';
import '../views/auth/forgot_password_view.dart';

// Home View
import '../views/home/home_view.dart';

// Post Views
import '../views/post/post_form_view.dart';
import '../views/post/post_detail_view.dart';

// Profile Views
import '../views/profile/profile_view.dart';
import '../views/profile/edit_profile_view.dart';

class AppRoutes {
  static const String login = '/login';
  static const String register = '/register';
  static const String forgotPassword = '/forgot';
  static const String home = '/home';
  static const String postForm = '/postForm';
  static const String postDetail = '/postDetail';
  static const String profile = '/profile';
  static const String editProfile = '/editProfile';

  static final Map<String, WidgetBuilder> routes = {
    login: (context) => const LoginView(),
    register: (context) => const RegisterView(),
    forgotPassword: (context) => const ForgotPasswordView(),
    home: (context) => const HomeView(),
    postForm: (context) => const PostFormView(),
    postDetail: (context) => const PostDetailView(),
    profile: (context) => const ProfileView(),
    editProfile: (context) => const EditProfileView(),
  };
}
