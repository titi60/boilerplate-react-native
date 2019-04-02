import React from 'react';
import { Text, View } from 'react-native';

class Basket extends React.Component {
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
        <Text>Basket</Text>
      </View>
    );
  }
}

export default Basket;
