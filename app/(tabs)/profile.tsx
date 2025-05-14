import { Feather, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.username}>zylorgojar</Text>
        <Feather name="more-vertical" size={24} />
      </View>

      {/* Profile Section */}
      <View style={styles.profileTop}>
        <Image
          source={require('../../assets/images/picture1.jpg')}
          style={styles.profilePic}
        />
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>3,022</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>67.2K</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2,542</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Bio */}
      <View style={styles.bio}>
        <Text style={styles.name}>Zylor Gojar</Text>
        <Text>Digital Creator</Text>
        <Text>Founder @Automoto Buy & Sell & Kabalikat Pioneer</Text>
        <Text>Automotive, Cars, Motors, Travel, IT, Driver, Sports</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button}><Text>Follow</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>Message</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text>Email</Text></TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="person-add" size={20} />
        </TouchableOpacity>
      </View>

      {/* Story Highlights */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.highlights}>
        {Array(5).fill(null).map((_, index) => (
          <View key={index} style={styles.highlight}>
            <Image source={{ uri: 'https://i.pravatar.cc/100?img=' + (index + 1) }} style={styles.highlightImg} />
            <Text style={styles.highlightText}>Highlight {index + 1}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Navigation Icons */}
      <View style={styles.bottomNav}>
        <MaterialIcons name="grid-on" size={24} />
        <Ionicons name="play-circle-outline" size={24} />
        <Feather name="bookmark" size={24} />
        <FontAwesome name="user-circle-o" size={24} />
      </View>

      {/* Grid of Posts */}
      <View style={styles.postGrid}>
        {Array(9).fill(null).map((_, index) => (
          <Image
            key={index}
            source={{ uri: `https://picsum.photos/200?random=${index}` }}
            style={styles.gridImage}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10
  },
  username: { fontSize: 20, fontWeight: 'bold' },
  profileTop: {
    flexDirection: 'row', alignItems: 'center', marginBottom: 15
  },
  profilePic: {
    width: 80, height: 80, borderRadius: 40, borderColor: '#800000', borderWidth: 2, marginRight: 20
  },
  stats: {
    flexDirection: 'row', justifyContent: 'space-between', flex: 1
  },
  statItem: { alignItems: 'center' },
  statNumber: { fontWeight: 'bold', fontSize: 16 },
  statLabel: { fontSize: 12 },
  bio: { marginBottom: 10 },
  name: { fontWeight: 'bold' },
  actions: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10
  },
  button: {
    flex: 1, marginHorizontal: 2, paddingVertical: 6,
    borderWidth: 1, borderColor: '#ccc', borderRadius: 5, alignItems: 'center'
  },
  iconButton: {
    width: 35, height: 35, borderWidth: 1, borderColor: '#ccc',
    borderRadius: 5, justifyContent: 'center', alignItems: 'center'
  },
  highlights: { marginVertical: 10 },
  highlight: { alignItems: 'center', marginRight: 15 },
  highlightImg: {
    width: 60, height: 60, borderRadius: 30, borderWidth: 1, borderColor: '#ddd'
  },
  highlightText: { fontSize: 12, marginTop: 4 },
  bottomNav: {
    flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10
  },
  postGrid: {
    flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'
  },
  gridImage: {
    width: '32%', height: 120, marginBottom: 5
  }
});
