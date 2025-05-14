import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    // Redirect to the home page when the login button is clicked
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      {/* Logo and App Name */}
      <View style={styles.header}>
         <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Text style={styles.appName}>SSUForum</Text>
      </View>

      {/* Login Form */}
      <View style={styles.form}>
        <TextInput placeholder="Username or Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>

      {/* OR divider */}
      <Text style={styles.or}>────────────  OR  ─────────────</Text>

      {/* Social Login Options */}
{/* Social Login Options */}
<View style={styles.socialLogin}>
  <View style={styles.socialItem}>
    <Image source={require('../../assets/images/facebook.png')} style={styles.socialIcon} />
    <Text style={styles.facebookText}> Login with Facebook</Text>
  </View>

  <View style={styles.socialItem}>
    <Image source={require('../../assets/images/google.png')} style={styles.socialIcon} />
    <Text style={styles.googleText}> Login with Google</Text>
  </View>
</View>


      {/* Sign Up Link */}
      <Text style={styles.signup}>
        Don’t have an account? <Text style={styles.link}>Sign up</Text>
      </Text>

      {/* Get the App */}
      <Text style={styles.getApp}>Get the App.</Text>
      <View style={styles.storeLinks}>
         <Image source={require('../../assets/images/playstore.png')} style={styles.storeIcon} />
         <Image source={require('../../assets/images/microsoft.png')} style={styles.storeIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 8,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  form: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '95%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    color: '#800000',
  },
  loginButton: {
    width: '95%',
    backgroundColor: '#800000',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  or: {
    marginVertical: 24,
    color: '#800000',
    fontWeight: 'bold',
  },
 socialLogin: {
  alignItems: 'center', // Centering the content horizontally
  marginBottom: 36,
},

socialItem: {
  flexDirection: 'row', // This arranges the image and text in a row (horizontal)
  alignItems: 'center', // Aligns image and text vertically in the center
  marginBottom: 12, // Space between the two social login options
},

socialIcon: {
  width: 24, // Set appropriate width for the icon
  height: 24, // Set appropriate height for the icon
  marginRight:10, // Space between the icon and the text
},

facebookText: {
  color: '#1877F2',
  fontSize: 14,
  fontWeight: 'bold',
  marginRight: -15,
},

googleText: {
  color: '#696969',
  fontSize: 14,
  fontWeight: 'bold',
},

  signup: {
    marginBottom: 16,
  },
  link: {
    color: '#3897f0',
    fontWeight: 'bold',
  },
  getApp: {
    color: '#aaa',
    marginBottom: 12,
  },
  storeLinks: {
    flexDirection: 'row',
    gap: 16,
  },
  storeIcon: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
});
