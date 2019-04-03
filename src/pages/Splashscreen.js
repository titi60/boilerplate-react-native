import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { wordingsSelector } from 'selectors';
import { requestLang } from 'actions/i18nActions';

class Splashscreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    const { navigation, requestLang } = this.props;

    requestLang();
    setTimeout(() => {
      navigation.navigate('Admin');
    }, 3000);
  }

  render() {
    const { wordings } = this.props;

    console.log(wordings.loading);
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#362E3A',
        }}
      >
        <Text style={{ color: 'white' }}>Efashion Splashscreen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    wordings: wordingsSelector(state),
  };
};

export default connect(
  mapStateToProps,
  {
    requestLang,
  }
)(Splashscreen);

Splashscreen.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  wordings: PropTypes.shape({}).isRequired,
  requestLang: PropTypes.func.isRequired,
};
