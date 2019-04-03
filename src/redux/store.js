import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import combinedReducers from 'reducers';

const middlewares = [thunk];

/**
 * [REDUX_STORE_VIEWER] Only in debugger mode
 */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

/**
 * [REDUX_ACTION_LOGGER] Only in Dev
 */
const logger = createLogger({
  duration: true,
  timestamp: true,
  collapsed: true,
});

// Only in development
middlewares.push(logger);

/**
 * [REDUX_PERSIST]
 */
const persistConfig = {
  key: 'boilerplate',
  storage: AsyncStorage,
  blacklist: ['i18n'], // do not persist these keys
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export default () => {
  const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(...middlewares)));

  const persistor = persistStore(store);

  return { store, persistor };
};
