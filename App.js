import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

import AppNavigator from './src/navigation/AppNavigator';
import StoryBookUI from './storybook';

const STORY_BOOK_ENABLED = false;

class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(false);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        {__DEV__ && STORY_BOOK_ENABLED ? <StoryBookUI /> : <AppNavigator />}
      </ThemeProvider>
    );
  }
}

export default App;
