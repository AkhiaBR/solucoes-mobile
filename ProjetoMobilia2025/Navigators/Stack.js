
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
import { createStackNavigator } from '@react-navigation/stack';


export default function Stack() {
  const Stack = createStackNavigator(); // cria uma variável que armazena a função StackNavigator

  return ( // somente um NavigationContainer por projeto
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='Login'> 
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
