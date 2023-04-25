/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import ErrorBoundary from '@components/ErrorBoundary';
import RootNavigator from '@navigations/RootNavigator';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ErrorBoundary>
        <RootNavigator />
      </ErrorBoundary>
    </SafeAreaProvider>
  );
}

export default App;
