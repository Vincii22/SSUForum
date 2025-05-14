import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, TextInput, View } from 'react-native';

const screenHeight = Dimensions.get('window').height;

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.inputWrapper}>
          <Image
            source={require('../../assets/images/magnifying-glass.png')}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search..."
            style={styles.searchInput}
            placeholderTextColor="#999"
          />
        </View>
      </View>

      {/* Reels Grid */}
      <ScrollView contentContainerStyle={styles.reelsContainer}>
        {Array.from({ length: 9 }).map((_, index) => (
          <View key={index} style={styles.reelBox}>
            {/* Replace this Image source with actual dynamic data */}
            <Image
              source={{ uri: 'https://picsum.photos/200/300?random=' + index }}
              style={styles.reelImage}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
    inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    height: 40, // Adjusted height to fit the icon
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10, // Space between icon and input
  },
  searchInput: {
    width: '95%',
    height: screenHeight * 0.05, // ~5vh
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    fontSize: 16,
  },
  reelsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  reelBox: {
    width: '32%',
    aspectRatio: 9 / 16,
    backgroundColor: '#eee',
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  reelImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
