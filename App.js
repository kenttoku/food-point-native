import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ flex: 1 }}>
          <Text>Hello World!</Text>
        </View>
      </SafeAreaView>
    );
  }
}
