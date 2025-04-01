
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
import { createDrawerNavigator } from '@react-navigation/drawer';


export default function App() {
  const MyDrawer = createDrawerNavigator();

  return ( // somente um NavigationContainer por projeto
    <NavigationContainer> 
      <MyDrawer.Navigator>
        <MyDrawer.Screen name='Login' component={Login}/>
        <MyDrawer.Screen name='Home' component={Home}/>
      </MyDrawer.Navigator>
    </NavigationContainer>
  );
}
