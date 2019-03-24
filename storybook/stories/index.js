import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View, Text } from 'react-native';
import Proptypes from 'prop-types';

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
};

const CenteredView = ({ children }) => <View style={style}>{children}</View>;

storiesOf('CenteredView', module).add('default view', () => (
  <CenteredView>
    <Text>Hello Storybook</Text>
  </CenteredView>
));

storiesOf('CenteredView', module).add('Yes', () => (
  <CenteredView>
    <Text>Yes</Text>
  </CenteredView>
));

storiesOf('Button', module).add('Button', () => (
  <CenteredView>
    <Text>This is a button</Text>
  </CenteredView>
));

CenteredView.propTypes = {
  children: Proptypes.node.isRequired,
};
