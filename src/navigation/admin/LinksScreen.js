import React from 'react';
import { View, Text } from 'react-native';

class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
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
        <Text>LinksScreen</Text>
      </View>
    );
  }
}

export default LinksScreen;
