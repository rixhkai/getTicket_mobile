import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ContentsCard from './src/screens/Contents';
import DetailCard from './src/screens/DetailEve';
import TabsAdvancedExample from './src/screens/TabHome';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: TabsAdvancedExample,
      navigationOptions: {
        title: 'Get.Ticket',
        headerTintColor: '#b4b7b8',
        headerStyle: {
          backgroundColor: '#2d3437',
        },
      },
    },
    Detail: {
      screen: DetailCard,
      navigationOptions: {
        title: 'Details',
        headerTintColor: '#b4b7b8',
        headerStyle: {
          backgroundColor: '#2d3437',
        },
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
