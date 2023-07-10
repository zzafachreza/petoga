import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  Register,
  Account,
  AccountEdit,
  Pengaturan,
  InfoPdf,
  RumahSakit,
  Janji,
  WebInfo,
  Materi,
  Pencarian,
  Detail,





} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Materi"
        component={Materi}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="Pencarian"
        component={Pencarian}
        options={{
          headerShown: false,

        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,

        }}
      />
    </Stack.Navigator>
  );
}
