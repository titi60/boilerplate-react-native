import React from 'react';
import { Text } from 'react-native';

// eslint-disable-next-line
export class MonoText extends React.Component {
  render() {
    // eslint-disable-next-line
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
