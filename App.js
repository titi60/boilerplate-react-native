import React from 'react';
import Proptypes from 'prop-types';
import { StatusBar } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import AppNavigator from './src/navigation/AppNavigator';
import StoryBookUI from './storybook';

const STORY_BOOK_ENABLED = true;

class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <ThemeProvider theme={theme}>
        {__DEV__ && STORY_BOOK_ENABLED ? <StoryBookUI /> : <AppNavigator />}
      </ThemeProvider>
    );
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

App.defaultProps = {
  skipLoadingScreen: false,
};

App.propTypes = {
  skipLoadingScreen: Proptypes.bool,
};

export default App;
