import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddPostScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Title Bar */}
      <View style={styles.header}>
        <Text style={styles.title}>New Post</Text>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>Share</Text>
        </TouchableOpacity>
      </View>

      {/* Description Section */}
      <View style={styles.section}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/picture1.jpg')}
            style={styles.profileImage}
          />
        </View>
        <TextInput
          style={styles.textInput}
          placeholder="Write a description..."
          multiline
        />
        <Image
          source={{ uri: 'https://picsum.photos/200/300' }} // Random Image
          style={styles.attachedImage}
        />
      </View>

      {/* Add Location */}
{/* Add Location */}
<View style={styles.section}>
  <Text style={styles.sectionTitle}>Add Location</Text>
  <TouchableOpacity>
    <Image
      source={require('../../assets/images/rightArrow.png')}  // Replace '>' with image
      style={styles.arrowImage}  // Add styling for the image
    />
  </TouchableOpacity>
</View>

{/* Tag People */}
<View style={styles.section}>
  <Text style={styles.sectionTitle}>Tag People</Text>
  <TouchableOpacity>
    <Image
      source={require('../../assets/images/rightArrow.png')}  // Replace '>' with image
      style={styles.arrowImage}  // Add styling for the image
    />
  </TouchableOpacity>
</View>

{/* Advanced Settings */}
<View style={styles.section}>
  <Text style={styles.sectionTitle}>Advanced Settings</Text>
  <TouchableOpacity>
    <Image
      source={require('../../assets/images/rightArrow.png')}  // Replace '>' with image
      style={styles.arrowImage}  // Add styling for the image
    />
  </TouchableOpacity>
</View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  shareButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  shareButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textInput: {
    height: 130,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
    width: '50%',
  },
  attachedImage: {
    width: '30%',
    height: 150,
    marginTop: 10,
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addMoreText: {
    color: '#007bff',
    fontSize: 16,
  },

  arrowImage: {
    width: 20,  // Adjust the width as needed
    height: 20, // Adjust the height as needed
    resizeMode: 'contain', // Ensure the image maintains its aspect ratio
  },
});
