import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DoneScreen from '../screens/DoneScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CreateTodoScreen from '../screens/CreateTodoScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const TodoStack = createStackNavigator(
  {
    Home: HomeScreen,
    CreateTodo: CreateTodoScreen,
  },
  config
);

TodoStack.navigationOptions = {
  tabBarLabel: 'To do',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-list`
          : 'md-list'
      }
    />
  ),
};

TodoStack.path = '';

const DoneStack = createStackNavigator(
  {
    Done: DoneScreen,
  },
  config
);

DoneStack.navigationOptions = {
  tabBarLabel: 'Done',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-checkbox-outline' : 'md-checkbox-outline'} />
  ),
};

DoneStack.path = '';

const tabNavigator = createBottomTabNavigator({
  TodoStack,
  DoneStack,
});

tabNavigator.path = '';

export default tabNavigator;
