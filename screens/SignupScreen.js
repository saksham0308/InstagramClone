import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button as RNButton, Pressable, TouchableOpacity, TextInput } from 'react-native';

import { Button, InputField, ErrorMessage } from '../components';
import Firebase from '../config/firebase';
const INSTAGRAM_LOGO = 'https://thumbs.dreamstime.com/b/instagram-new-logo-chisinau-moldova-september-instagram-new-logo-printed-white-paper-instagram-online-mobile-photo-128373493.jpg'
const auth = Firebase.auth();

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [signupError, setSignupError] = useState('');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onHandleSignup = async () => {
    try {
      if (email !== '' && password !== '') {
        await auth.createUserWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setSignupError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.inputField}>
          <TextInput
            placeholderTextColor='#444'
            placeholder='Email'
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoFocus={true}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        {/* <View
          style={styles.inputField}>
          <TextInput
            placeholderTextColor='#444'
            placeholder='Username'
            autoCapitalize='none'

            textContentType='username'
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
          />
        </View> */}
        <View style={styles.inputField}>
          <TextInput
            placeholderTextColor='#444'
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            textContentType='password'
            onChangeText={text => setPassword(text)}
            value={password}
            handlePasswordVisibility={handlePasswordVisibility}
          // value={values.password}
          />
          {signupError ? <ErrorMessage error={signupError} visible={true} /> : null}
          {/* <TextInput /> */}
        </View>
        <Pressable titleSize={20} style={styles.button} onPress={onHandleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
        <View style={styles.signupContainer}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#6BB0F5' }}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* <StatusBar style='dark-content' /> */}
      {/* <Text style={styles.title}>Create new account</Text> */}
      {/* <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: 20
        }}
        leftIcon='email'
        placeholder='Enter email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        value={email}
        onChangeText={text => setEmail(text)}
      /> */}
      {/* <InputField
        inputStyle={{
          fontSize: 14
        }}
        containerStyle={{
          backgroundColor: '#fff',
          marginBottom: 20
        }}
        leftIcon='lock'
        placeholder='Enter password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType='password'
        rightIcon={rightIcon}
        value={password}
        onChangeText={text => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      /> */}
      {/* {signupError ? <ErrorMessage error={signupError} visible={true} /> : null}
      <Button
        onPress={onHandleSignup}
        backgroundColor='#f57c00'
        title='Signup'
        tileColor='#fff'
        titleSize={20}
        containerStyle={{
          marginBottom: 24
        }}
      />
      <RNButton
        onPress={() => navigation.navigate('Login')}
        title='Go to Login'
        color='#fff'
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80
  },
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  buttonText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 20
  },
  button: {
    backgroundColor: '#0096F6',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    // borderRadius: 1
    borderWidth: 1
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  }
});
