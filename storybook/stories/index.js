import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Proptypes from 'prop-types';
import Box from 'styles/Box';
import Text from 'styles/Text';
import Button from 'styles/Button';

const CenteredView = ({ children }) => (
  <Box flex="1" justifyContent="center" alignItems="center" px={20}>
    {children}
  </Box>
);

storiesOf('CenteredView', module).add('default view', () => (
  <CenteredView>
    <View style={{ width: 200, height: 100, backgroundColor: 'red' }}>
      <Text>Hello Storybook</Text>
    </View>
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

storiesOf('Box', module).add('Button', () => (
  <CenteredView>
    <Button
      onPress={() => {
        console.log('Okay');
      }}
    >
      <Box width={1} height={50} bg="pink.1" justifyContent="center" alignItems="center">
        <Text color="white">wqdqwdqwdqwd</Text>
      </Box>
    </Button>
  </CenteredView>
));

CenteredView.propTypes = {
  children: Proptypes.node.isRequired,
};
