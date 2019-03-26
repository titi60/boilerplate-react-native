import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ onPress, children }) => (
  <TouchableWithoutFeedback onPress={onPress}>{children}</TouchableWithoutFeedback>
);

export default Button;

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
