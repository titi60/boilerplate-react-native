import React from 'react';
import { Text, View } from 'react-native';

class Login extends React.Component {
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
        <Text>Login</Text>
      </View>
    );
  }
}

export default Login;
