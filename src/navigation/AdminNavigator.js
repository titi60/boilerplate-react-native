// import React from 'react';
// import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
// import { Icon } from 'expo';

import HomeScreen from '../pages/admin/HomeScreen';
import LinksScreen from '../pages/admin/LinksScreen';
import SettingsScreen from '../pages/admin/SettingsScreen';

// const Colors = {
//   tabIconDefault: '#ccc',
//   tabIconSelected: '#2f95dc',
// };

// eslint-disable-next-line
// class TabBarIcon extends React.Component {
//   render() {
//     return (
//       <Icon.Ionicons
//         // eslint-disable-next-line
//         name={this.props.name}
//         size={26}
//         style={{ marginBottom: -3 }}
//         // eslint-disable-next-line
//         color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
//       />
//     );
//   }
// }

/**
 * [ADMIN] FIRST TAB
 */
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  // eslint-disable-next-line
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon
  //     focused={focused}
  //     name={
  //       Platform.OS === 'ios'
  //         ? `ios-information-circle${focused ? '' : '-outline'}`
  //         : 'md-information-circle'
  //     }
  //   />
  // ),
};

/**
 * [ADMIN] SECOND TAB
 */
const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  // eslint-disable-next-line
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  // ),
};

/**
 * [ADMIN] THIRD TAB
 */
const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  // eslint-disable-next-line
  // tabBarIcon: ({ focused }) => (
  //   <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  // ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

