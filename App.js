import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
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
        <NativeRouter>
          <Route exact path="/" component={LandingScreen} />
        </NativeRouter>
      </StyledSafeAreaView>
    );
  }
}
