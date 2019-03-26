import { getStorybookUI, configure } from '@storybook/react-native';

import './rn-addons';

configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({
  port: 7007,
  host: 'localhost',
  onDeviceUI: false,
  resetStorybook: true,
});

export default StorybookUIRoot;
