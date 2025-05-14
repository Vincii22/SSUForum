import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  logoContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoName: {
    marginTop: 10,
    marginLeft: 15,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#9D1616',
  },
  rightIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
    marginTop: 15,
  },
  storiesContainer: {
    padding: 15,
  },
  storyCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,

  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#9D1616',

  },
  postsContainer: {
    padding: 15,
    paddingTop: 2,
  },
  post: {
    paddingTop: 15,
    marginBottom: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#9D1616',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  menu: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  username: {
    marginLeft: 10,
    fontWeight: 'bold',
    flex: 1,
    fontSize: 16,
  },
  postTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 5,
  },
  postDescription: {
    marginVertical: 10,
  },
  readMore: {
    color: '#007bff',
    marginTop: 5,
  },
  postImage: {
    width: '100%',
    height: 300,
    marginVertical: 10,
    borderRadius: 10,
  },
  reactionsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  reactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  bookmarkButton: {
    marginBottom: 25,
    alignSelf: 'flex-end',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerIconButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -25 }],
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicFooter: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
    iconStyle: {
    width: 24, // Adjusted size for icons
    height: 24, // Adjusted size for icons
    resizeMode: 'contain', // Ensures the icon maintains its aspect ratio
  },
  storyItem: {
  alignItems: 'center',
  marginRight: 15,
  width: 70,
},

storyLabel: {
  fontSize: 12,
  marginTop: 5,
  textAlign: 'center',
},

});

export default homeStyles;
