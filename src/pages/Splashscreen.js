import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

class Splashscreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { navigation } = this.props;

    setTimeout(() => {
      navigation.navigate('Admin');
    }, 3000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#362E3A'
        }}
      >
        <Text style={{ color: 'white' }}>Efashion Splashscreen</Text>
      </View>
    );
  }
}

export default Splashscreen;

Splashscreen.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
}