import React from 'react';
import { View } from 'react-native';
import { Box, Text } from 'styles';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
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
        <Box width={1} height={50} bg="pink.1" justifyContent="center" alignItems="center">
          <Text color="white">Connexion</Text>
        </Box>
        <Text>SettingsScreen</Text>
      </View>
    );
  }
}
