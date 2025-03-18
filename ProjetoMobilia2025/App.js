
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Profile from "./components/profile.js"; // componente que é default nao precisa de chave
import { Gallery, Artist} from './components/profile.js'; // componente que não é default precisa de chaves
import Test from './components/test.js';

export default function App() {
  return (
    <View style={styles.container}> {/*Precisa do View para que mais componentes sejam mostrados na página */}
      <Test/>
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});