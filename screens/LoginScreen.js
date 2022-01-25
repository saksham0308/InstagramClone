import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity, Button as RNButton, Image } from 'react-native';

import { Button, InputField, ErrorMessage } from '../components';
import Firebase from '../config/firebase';
const INSTAGRAM_LOGO = 'https://thumbs.dreamstime.com/b/instagram-new-logo-chisinau-moldova-september-instagram-new-logo-printed-white-paper-instagram-online-mobile-photo-128373493.jpg'
const auth = Firebase.auth();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye');
  const [loginError, setLoginError] = useState('');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'eye') {
      setRightIcon('eye-off');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'eye-off') {
      setRightIcon('eye');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onLogin = async () => {
    try {
      if (email !== '' && password !== '') {
        await auth.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
      </View>

      <View style={styles.wrapper}>
        {loginError ? <ErrorMessage error={loginError} visible={true} /> : null}
        <View style={styles.inputField}>
          <TextInput
            placeholderTextColor='#444'
            placeholder='Phone number, username or mail'
            autoCapitalize='none'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoFocus={true}
            onChangeText={text => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.inputField}>
          <TextInput

            handlePasswordVisibility={handlePasswordVisibility}
            onChangeText={text => setPassword(text)}
            placeholderTextColor='#444'
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            textContentType='password'
            value={password}
          />
          {/* {loginError ? <ErrorMessage error={loginError} visible={true} /> : null} */}
          {/* <TextInput /> */}
        </View>

        <View style={{ alignItems: 'flex-end', marginBottom: 30 }}>
          <Text style={{ color: '#6BB0F5' }}>Forgot Password</Text>
        </View>
        <Pressable
          titleSize={20}
          style={styles.button}
          onPress={onLogin}
        // disabled={!isValid}

        >
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>
        <View style={styles.signupContainer}>
          <Text>Dont have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{ color: '#6BB0F5' }}>Sign up</Text>
          </TouchableOpacity>
        </View>

      </View>



      {/* <StatusBar style='dark-content' /> */}
      {/* <Text style={styles.title}>Login</Text> */}
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
      {/* {loginError ? <ErrorMessage error={loginError} visible={true} /> : null} */}
      {/* <Button
        onPress={onLogin}
        backgroundColor='#f57c00'
        title='Login'
        tileColor='#fff'
        titleSize={20}
        containerStyle={{
          marginBottom: 24
        }}
      /> */}
      {/* <RNButton
        onPress={() => navigation.navigate('Signup')}
        title='Go to Signup'
        color='#fff'
      /> */}




    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0096F6',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4
  },
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50
  },
  buttonText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 20
  },
  wrapper: {
    marginTop: 80
  },

  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    // borderRadius: 1
    borderWidth: 1
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  // title: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: '#fff',
  //   alignSelf: 'center',
  //   paddingBottom: 24
  // },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  }
});
