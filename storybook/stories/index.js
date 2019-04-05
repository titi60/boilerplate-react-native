import React from 'react';
import { View } from 'react-native';
import { Box, Text, Button } from 'appStyles';
import { storiesOf } from '@storybook/react-native';
import Proptypes from 'prop-types';

const CenteredView = ({ children }) => (
  <Box flex={1} justifyContent="center" alignItems="center" px={20}>
    {children}
  </Box>
);

storiesOf('CenteredView', module).add('Product', () => (
  <CenteredView>
    <View style={{ width: 200, height: 300, backgroundColor: 'grey' }}>
      <Text>PRODUCTS_LIST_ITEM</Text>
    </View>
  </CenteredView>
));

storiesOf('CenteredView', module).add('Blue Button', () => (
  <CenteredView>
    <Box width={1} height={50} bg="blue" justifyContent="center" alignItems="center">
      <Text>Yes</Text>
    </Box>
  </CenteredView>
));

storiesOf('Button', module).add('Button', () => (
  <CenteredView>
    <Text>This is a button</Text>
  </CenteredView>
));

storiesOf('Box', module).add('Pink Button', () => (
  <CenteredView>
    <Button
      onPress={() => {
        console.log('Okay');
      }}
    >
      <Box width={1} height={50} bg="pink.1" justifyContent="center" alignItems="center">
        <Text color="white">Connexion</Text>
      </Box>
    </Button>
  </CenteredView>
));

CenteredView.propTypes = {
  children: Proptypes.node.isRequired,
};
