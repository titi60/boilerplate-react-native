module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          appStyles: './src/styles',
          actions: './src/redux/actions',
          reducers: './src/redux/reducers',
          selectors: './src/redux/selectors',
          shared: './src/components/shared',
          utils: './src/utils',
          config: './config',
        },
      },
    ],
  ],
};
