import React from 'react';
import { Text, View } from 'react-native';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Homescreen</Text>
      </View>
    );
  }
}

export default HomeScreen;
