import React from 'react';
import { Text, View } from 'react-native';

class Products extends React.Component {
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
        <Text>Products</Text>
      </View>
    );
  }
}

export default Products;
