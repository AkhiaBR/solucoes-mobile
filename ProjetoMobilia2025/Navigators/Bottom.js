
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Profile from "./components/profile.js"; // componente que é default nao precisa de chave
import { Gallery, Artist} from './components/profile.js'; // componente que não é default precisa de chaves
import Test from './components/test.js';

// Navegation Class
import Home from './Screens/Home.js';
import Login from './Screens/Login.js';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function Bottom() {
  const BottomTab = createBottomTabNavigator();

  return ( // somente um NavigationContainer por projeto
    <NavigationContainer> 
      <BottomTab.Navigator>
        <BottomTab.Screen name='Login' component={Login}/>
        <BottomTab.Screen name='Home' component={Home}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
