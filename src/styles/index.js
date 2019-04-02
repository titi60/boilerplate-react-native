import React from 'react';
import { Dimensions } from 'react-native';

import BoxComponent from './Box';
import ButtonComponent from './Button';
import TextComponent from './Text';
import theme from './theme';

const { width, height } = Dimensions.get('window');
const window = {
  width,
  height,
};
const isSmallDevice = width < 375;
const isLargeDevice = width > 375;

const Box = props => <BoxComponent {...props} />;
const Button = props => <ButtonComponent {...props} />;
const Text = props => <TextComponent {...props} />;

export { Box, Button, Text, theme, window, isSmallDevice, isLargeDevice };
