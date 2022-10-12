import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, Icon} from '@ui-kitten/components';
import { SafeAreaView } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import { colors } from './constants/styles';

import AddNewScreen from './screens/AddNewScreen';
import DatasetsScreen from './screens/DatasetsScreen';
import CalibrationScreen from './screens/CalibrationScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

// Secondary screens
import AddNewData from './screens/AddNewData';
import SelectExisting from './screens/SelectExisting';
import CalibrateNew from './screens/CalibrateNew';
import DatasetDetails from './screens/DatasetDetails';

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index} onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='Add New' icon={<Icon name='file-add'/>}/>
    <BottomNavigationTab title='Datasets' icon={<Icon name='book-open'/>}/>
    <BottomNavigationTab title='Calibration' icon={<Icon name='edit'/>}/>
  </BottomNavigation>
);

const TabNavigator = () => (
  <BottomTab.Navigator tabBar={props => <BottomTabBar {...props}/>} screenOptions={{
    headerStyle: { backgroundColor: colors.medium }, headerTintColor: 'white'}}>
    <BottomTab.Screen name='addNew' component={AddNewScreen} options={{title: 'Add New Dataset'}}/>
    <BottomTab.Screen name='datasets' component={DatasetsScreen} options={{title: 'View Datasets'}}/>
    <BottomTab.Screen name='calibration' component={CalibrationScreen} options={{title: 'Calibration'}}/>
  </BottomTab.Navigator>
);

const StackNavigator = () => (
  <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: colors.medium }, headerTintColor: 'white'}}>
    <Stack.Screen name='TabNavigator' component={TabNavigator}  options={{headerShown: false}}/>

    <Stack.Screen name='LoginScreen' component={LoginScreen}/>
    <Stack.Screen name='SignupScreen' component={SignupScreen}/>

    <Stack.Screen name='AddNewData' component={AddNewData}/>
    <Stack.Screen name='CalibrateNew' component={CalibrateNew}/>
    <Stack.Screen name='DatasetDetails' component={DatasetDetails}/>
    <Stack.Screen name='SelectExisting' component={SelectExisting}/>
  </Stack.Navigator>
);

export default () => ( <>
  <IconRegistry icons={EvaIconsPack} />
  <SafeAreaView style={{ flex: 1 }}>
  <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  </ApplicationProvider>
  </SafeAreaView>
</>
);
