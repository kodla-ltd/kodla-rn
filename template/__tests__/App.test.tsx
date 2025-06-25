/**
 * @format
 */

import 'react-native';
import * as ReactTestRenderer from 'react-test-renderer';
import * as React from 'react';
import RootApp from '../src';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<RootApp />);
  });
});
