import { Tabs } from 'expo-router';
import React from 'react';
import { Image } from 'react-native'; // Importing Image component

export default function TabsLayout() {
  return (

    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#9D1616' }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/home.png')} // Replace with your image path
              style={{ width: size, height: size, tintColor: color }} // Adjust size and color
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/magnifying-glass.png')} // Replace with your image path
              style={{ width: size, height: size, tintColor: color }} // Adjust size and color
            />
          ),
        }}
      />
      <Tabs.Screen
        name="addPost"
        options={{
          title: 'Add Post',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/add.png')} // Replace with your image path
              style={{ width: size, height: size, tintColor: color }} // Adjust size and color
            />
          ),
        }}
      />
      <Tabs.Screen
        name="playVideo"
        options={{
          title: 'Reels',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/reel.png')} // Replace with your image path
              style={{ width: size, height: size, tintColor: color }} // Adjust size and color
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../assets/images/post1.jpg')} // Replace with your image path
              style={{ width: size, height: size, tintColor: color }} // Adjust size and color
            />
          ),
        }}
      />
    </Tabs>
  );
}
