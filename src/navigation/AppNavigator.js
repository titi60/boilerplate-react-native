import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import TabBarIcon from '../components/Sample_TabBarIcon';

import Splashscreen from './Splashscreen';

import Login from './authentication/Login';

import Home from './shop/Home';
import Basket from './shop/Basket';
import Products from './shop/Products';

import HomeScreen from './admin/HomeScreen';
import LinksScreen from './admin/LinksScreen';
import SettingsScreen from './admin/SettingsScreen';

/**
 * [ADMIN] FIRST TAB
 */
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  // eslint-disable-next-line
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
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
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
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
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};



/**
 * [MAIN_NAVIGATOR]
 */

// Header options
const navigationOptions = {
  headerMode: 'none',
};

const AuthenticationNavigator = createStackNavigator({
  Login,
}, {
  ...navigationOptions,
    initialRouteName: 'Login',
})

const ShopNavigator = createStackNavigator({
  Home,
  Basket,
  Products,
},
  {
    ...navigationOptions,
    initialRouteName: 'Home',
  }
);

const AdminNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});

export default createAppContainer(
  createStackNavigator({
    Admin: AdminNavigator,
    Shop: ShopNavigator,
    Authentication: AuthenticationNavigator,
    Splashscreen,
  }, {
    ...navigationOptions,
    initialRouteName: 'Splashscreen',
  })
);
