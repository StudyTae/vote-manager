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

const DefaultStack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <DefaultStack.Navigator>
        <DefaultStack.Screen
          name="Login"
          component={LoginIndex}
          options={{headerShown: false}}
        />
      </DefaultStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
