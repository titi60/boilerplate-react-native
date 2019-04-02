import { createStackNavigator, createAppContainer } from 'react-navigation';
import AdminNavigator from './AdminNavigator';

import Splashscreen from '../pages/Splashscreen';
import Login from '../pages/authentication/Login';
import Home from '../pages/shop/Home';
import Basket from '../pages/shop/Basket';
import Products from '../pages/shop/Products';

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
}, {
  ...navigationOptions,
  initialRouteName: 'Home',
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
