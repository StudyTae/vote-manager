/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginIndex from './src/pages/login/index';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'react-native-elements';

const DefaultStack = createStackNavigator();

const theme = {
  Button: {
    titleStyle: {fontSize: 15},
  },
};

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <DefaultStack.Navigator>
            <DefaultStack.Screen
              name="Login"
              component={LoginIndex}
              options={{headerShown: false}}
            />
          </DefaultStack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
