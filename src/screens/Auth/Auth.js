import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';
import ButtonWidthBackground from '../../components/UI/ButtonWidthBackground/ButtonWidthBackground';
import BackgroundImage from '../../assets/busan.jpg';

class AuthScreen extends Component {
loginHandler = () => {
  startMainTabs();
}

  render() {
    return (
        <ImageBackground source={BackgroundImage} style={BackgroundImage}>
          <View style={styles.container}>
        <MainText>
        <HeadingText>Please Log In</HeadingText>
        </MainText>
        <ButtonWidthBackground color='#29aaf4'>Switch to Login</ButtonWidthBackground>
        <View style={styles.inputContainer}>
        <DefaultInput placeholder='Your Email Address' style={styles.input} />
        <DefaultInput placeholder='Password' style={styles.input} />
        <DefaultInput placeholder='Confirm' style={styles.input} />
      </View>
      <ButtonWidthBackground color='#29aaf4'>Submit</ButtonWidthBackground>
    </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#eee',
    borderColor: '#bbb'
  },
  inputContainer: {
    width: '80%'
  },
  BackgroundImage: {
    width: '100%',
    height: '100%',
    flex: 1
  }
});

export default AuthScreen;
