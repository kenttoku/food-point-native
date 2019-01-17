import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import LandingScreen from './src/components/screens/LandingScreen';

const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export default class App extends React.Component {
  render() {
    return (
      <StyledSafeAreaView>
        <LandingScreen />
      </StyledSafeAreaView>
    );
  }
}
