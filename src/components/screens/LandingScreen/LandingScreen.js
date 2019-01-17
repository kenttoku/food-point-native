import React, { Component } from 'react';
import { CenterView, BasicText } from 'constants/styles';

export default class LandingScreen extends Component {
  render() {
    return (
      <CenterView>
        <BasicText>Food Point</BasicText>
        <BasicText>Sign up with email</BasicText>
        <BasicText>Already have an account? Sign in.</BasicText>
      </CenterView>
    );
  }
}
