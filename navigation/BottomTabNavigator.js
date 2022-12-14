import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

// Import styling and components
import TabBarIcon from '../components/TabBarIcon';
import Colours from "../constants/Colours";
import Styles from "../styles/MainStyle";

// Import navigators & screens
import HomeScreen from '../screens/HomeScreen';
import HelpScreen from '../screens/HelpScreen';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colours.tabLabelSelected,
        tabBarInactiveTintColor: Colours.tabLabel,
        tabBarStyle: Styles.navBar,
        tabBarLabelStyle: Styles.navBarLabel,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />
        }}
      />
      <BottomTab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          title: 'Help',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-help-circle" />,
        }}
      />
    </BottomTab.Navigator>
  );
}