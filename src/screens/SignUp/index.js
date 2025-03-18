import React, { useState } from 'react';
import { StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import IconButton from '../../components/IconButton';
import { isValidEmail, isValidPassword, doPasswordsMatch } from '../../utils/utils';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (!isValidEmail(email)) {
      Alert.alert('Error', 'Invalid email format.', [{ text: 'OK' }]);
      return;
    }

    if (!isValidPassword(password)) {
      Alert.alert('Error', 'Password must be at least 6 characters long.', [{ text: 'OK' }]);
      return;
    }

    if (!doPasswordsMatch(password, confirmPassword)) {
      Alert.alert('Error', 'Passwords do not match.', [{ text: 'OK' }]);
      return;
    }

    Alert.alert('Success', 'Account created successfully!', [{ text: 'OK' }]);
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign Up</Text>

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

      <CustomTextInput
        label="Confirm Password"
        placeholder="Confirm your password!"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign up with</Text>

      <View style={styles.socialButtonsContainer}>
        <IconButton
          iconSource={require('../../assets/google_logo.png')}
          text="Google"
          onPress={() => Alert.alert('Google sign-up', 'Google sign-up feature coming soon!')}
        />
        <IconButton
          iconSource={require('../../assets/facebook_logo.png')}
          text="Facebook"
          onPress={() => Alert.alert('Facebook sign-up', 'Facebook sign-up feature coming soon!')}
        />
      </View>

      <View style={styles.signInContainer}>
        <Text style={styles.alreadyMemberText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.replace('SignIn')}>
          <Text style={styles.signInLink}> Sign In</Text>
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
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  alreadyMemberText: {
    color: '#000',
    fontSize: 16,
  },
  signInLink: {
    color: '#007bff',
    fontSize: 16,
  },
});

export default SignUpScreen;
