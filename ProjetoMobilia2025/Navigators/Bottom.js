
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Profile from "./components/profile.js"; // componente que é default nao precisa de chave
import { Gallery, Artist} from './components/profile.js'; // componente que não é default precisa de chaves
import Test from './components/test.js';

// Navegation Class
import Home from './Screens/Home.js';
import Login from './Screens/Login.js';
import Feed from './Screens/Feed.js';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from '@expo/vector-icons/Entypo'; // importa icone


export default function Bottom () {
  const BottomTab = createBottomTabNavigator();

  return ( // somente um NavigationContainer por projeto
    <NavigationContainer> 
      <BottomTab.Navigator
      screenOptions={{
        headerStyle : {backgroundColor: "purple"}, 
        headerTintColor: 'white',
        tabBarActiveBackgroundColor: '#DA70D6',
        tabBarInactiveBackgroundColor : 'purple',
      }}
      >
        <BottomTab.Screen name='Login' component={Login} 
        options={{
          tabBarIcon: () =>
            <Entypo name="login" size={24} color="black"/>
        }}
        />
        <BottomTab.Screen name='Feed' component={Feed}
        options={{
          tabBarIcon: () =>
            <Entypo name="feed" size={24} color="black"/>
        }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
