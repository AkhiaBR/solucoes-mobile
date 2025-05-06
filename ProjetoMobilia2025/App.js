
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
import { createStackNavigator } from '@react-navigation/stack';
import Count from './Screens/Count.js';
import Entypo from '@expo/vector-icons/Entypo'; // importa icone

import Product from './Screens/Product.js';

function BottomTab () {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    screenOptions={{
      headerStyle : {backgroundColor: "purple"}, 
      headerTintColor: 'white',
      tabBarActiveBackgroundColor: '#DA70D6',
      tabBarInactiveBackgroundColor : 'purple',
    }}
    >
      <Tab.Screen name='Home' component={Home}
      options={{
        tabBarIcon: () =>
          <Entypo name="home" size={24} color="black"/>
      }}
      />
      <Tab.Screen name='Feed' component={Feed}
      options={{
        tabBarIcon: () =>
          <Entypo name="feed" size={24} color="black"/>
      }}
      />
      <Tab.Screen name='Contador' component={Count}
      options={{
        tabBarIcon: () =>
          <Entypo name="count" size={24} color="black"/>
      }}
      />
      <Tab.Screen name='Produto' component={Product}
      options={{
        tabBarIcon: () =>
          <Entypo name="product" size={24} color="black"/>
      }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  const Stack = createStackNavigator();

  return ( // somente um NavigationContainer por projeto      //   <Stack.Screen options={{headerShown:false}} name="Home" component={BottomTab}/> //ativa a BottomTab
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="LOGIN" component={Login}/>
        <Stack.Screen options={{headerShown:false}} name="Home" component={BottomTab}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
