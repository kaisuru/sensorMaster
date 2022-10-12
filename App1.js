import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {colors} from './constants/styles'

import AddNewScreen from './screens/AddNewScreen';
import DatasetsScreen from './screens/DatasetsScreen';
import CalibrationScreen from './screens/CalibrationScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/CalibrationScreen'
import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function BottomTabNavigate(){
  return (<Tab.Navigator screenOptions={{
    headerStyle: { backgroundColor: '#3c0a6b' },
    headerTintColor: 'white',
    tabBarActiveTintColor: '#3c0a6b'
  }}>
    <Tab.Screen name="Add New" component={AddNewScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}/>
    <Tab.Screen name="Datasets" component={DatasetsScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}/>
    <Tab.Screen name='Calibration' component={CalibrationScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}/>
  </Tab.Navigator>)
}

export default function App() {

  return (
    <View>
      <StatusBar style="dark"/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: colors.medium },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: colors.dark },
      }}>

          <Stack.Screen name='bottomTabs' component={BottomTabNavigate}/>
          <Stack.Screen name='Login' component={LoginScreen}/>

        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

