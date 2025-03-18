import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import CustomTextInput from '../../components/CustomTextInput';
import IconButton from '../../components/IconButton';
import { isValidEmail, isValidPassword } from '../../utils/utils';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleSignIn = () => {
    if (email && password) {
      if (!isValidEmail(email)) {
        Alert.alert('Error', 'Invalid email format.', [{ text: 'OK' }]);
        return;
      }

      if (!isValidPassword(password)) {
        Alert.alert('Error', 'Password must be at least 6 characters long.', [{ text: 'OK' }]);
        return;
      }

      setIsLoggedIn(true);
      Alert.alert('Success', 'Logged in successfully!', [{ text: 'OK' }]);
    } else {
      Alert.alert('Error', 'Please fill in all fields.', [{ text: 'OK' }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign In</Text>

      <CustomTextInput
        label="Email ID"
        placeholder="Enter your email here!"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <CustomTextInput
        label="Password"
        placeholder="Enter your password here!"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.socialButtonsContainer}>
        <IconButton
          iconSource={require('../../assets/google_logo.png')}
          text="Google"
          onPress={() => Alert.alert('Google sign-in', 'Google sign-in feature coming soon!')}
        />
        <IconButton
          iconSource={require('../../assets/facebook_logo.png')}
          text="Facebook"
          onPress={() => Alert.alert('Facebook sign-in', 'Facebook sign-in feature coming soon!')}
        />
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.notMemberText}>Not yet a member?</Text>
        <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
          <Text style={styles.signUpLink}> Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  forgotPasswordText: {
    color: '#007bff',
    textAlign: 'right',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 15,
    color: '#6c757d',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  notMemberText: {
    color: '#000',
    fontSize: 16,
  },
  signUpLink: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default SignInScreen;
