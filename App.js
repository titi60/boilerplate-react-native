import React from 'react';
import { StatusBar } from 'react-native';
// REDUX
import { Provider } from 'react-redux';
import configureStore from './src/redux/store'; // eslint-disable-line
import { PersistGate } from 'redux-persist/lib/integration/react';
// STYLES
import { ThemeProvider } from 'styled-components';
import theme from 'appStyles/theme';
// REACT NAVIGATION
import AppNavigator from './src/navigation/AppNavigator';
import StoryBookUI from './storybook';

const STORY_BOOK_ENABLED = true;

const { store, persistor } = configureStore();

class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(false);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <ThemeProvider theme={theme}>
            {__DEV__ && STORY_BOOK_ENABLED ? <StoryBookUI /> : <AppNavigator />}
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
