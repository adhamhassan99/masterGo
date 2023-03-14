/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';

import ProvidersWrappers from './src/components/ProvidersWrappers/ProvidersWrappers';
import MainNavigator from './src/Navigators/MainNavigator';

function App(): JSX.Element {
  return (
    <ProvidersWrappers>
      <MainNavigator />
    </ProvidersWrappers>
  );
}

export default App;
