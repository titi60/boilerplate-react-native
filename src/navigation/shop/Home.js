import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { navigation } = this.props;
    setTimeout(() => {
      navigation.navigate('Products');
    }, 2000);
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Shop</Text>
      </View>
    );
  }
}

export default Home;

Home.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
}