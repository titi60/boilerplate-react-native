import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Sample_Colors';

// eslint-disable-next-line
class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        // eslint-disable-next-line
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        // eslint-disable-next-line
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}

export default TabBarIcon;
