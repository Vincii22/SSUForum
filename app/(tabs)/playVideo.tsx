import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview'; // WebView for playing videos

export default function PlayVideoScreen() {
  // Array with 10 random video URLs
  const randomVideos = [
    'https://www.w3schools.com/html/movie.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
    'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_5mb.mp4',
    'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4',
    'https://www.w3schools.com/html/movie.mp4',
    'https://www.w3schools.com/html/mov_bbb.mp4',
    'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4',
    'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_5mb.mp4',
    'https://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_10mb.mp4',
  ];

  // Video post data (hearts, comments, shares, and user info)
  const videoData = {
    hearts: 120,
    comments: 34,
    shares: 21,
    user: {
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'Geth',
      description: 'Nature Trips.',
      isFollowed: true,
    },
  };

  return (
    <ScrollView style={styles.container}>
      {randomVideos.map((videoUrl, index) => (
        <View key={index} style={styles.videoContainer}>
          {/* WebView for video */}
          <View style={styles.videoWrapper}>
            <WebView
              source={{ uri: videoUrl }}
              style={styles.video}
              javaScriptEnabled={true}
              domStorageEnabled={true}
            />
            {/* Interaction Icons (Hearts, Comments, Shares) */}
            <View style={styles.iconContainer}>
              <View style={styles.iconWrapper}>
                <Text style={styles.icon}>❤️</Text>
                <Text style={styles.iconText}>{videoData.hearts}</Text>
              </View>
              <View style={styles.iconWrapper}>
                <Text style={styles.icon}>💬</Text>
                <Text style={styles.iconText}>{videoData.comments}</Text>
              </View>
              <View style={styles.iconWrapper}>
                <Text style={styles.icon}>🔗</Text>
                <Text style={styles.iconText}>{videoData.shares}</Text>
              </View>
            </View>

            {/* User Info Section */}
            <View style={styles.userInfoContainer}>
              <View style={styles.userInfo}>
                <Image
                  source={{ uri: videoData.user.profilePicture }}
                  style={styles.userProfileImage}
                />
                <View style={styles.userDetails}>
                  <Text style={styles.userName}>{videoData.user.name}</Text>
                  <TouchableOpacity>
                    <Text style={styles.followButton}>
                      {videoData.user.isFollowed ? 'Followed' : 'Follow'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* Description */}
              <Text style={styles.userDescription}>{videoData.user.description}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  videoContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  videoWrapper: {
    position: 'relative', // Ensure positioning within the video container
  },
  video: {
    width: '100%',
    height: 850,
    backgroundColor: '#000',
  },
  iconContainer: {
    position: 'absolute',
    bottom: 60,
    right: 10,
    flexDirection: 'column', // Change to column to align icons vertically
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: 5,
    borderRadius: 10,
  },
  iconWrapper: {
    alignItems: 'center',
    marginVertical: 5, // Adjust spacing for vertical alignment
  },
  icon: {
    fontSize: 24,
    color: '#fff', // White icons for contrast
  },
  iconText: {
    fontSize: 14,
    color: '#fff',
  },
  userInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Darkened background
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userProfileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userDetails: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  followButton: {
    color: '#007bff',
    fontSize: 14,
  },
  userDescription: {
    marginTop: 5,
    fontSize: 14,
    color: '#fff',
  },
});
