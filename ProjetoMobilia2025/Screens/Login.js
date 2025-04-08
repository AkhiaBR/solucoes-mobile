import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { ImageBackground } from "react-native-web";
import Entypo from '@expo/vector-icons/Entypo'; // importa icone

export default function Login({ navigation }) {
    return (
        <View>
            <View>
                <Text>Faça seu login agora:</Text>
                <TextInput placeholder="Usuário" />
                <TextInput placeholder="Senha" secureTextEntry />
            </View>
            <View>
                <Button
                    title="Login"
                    color="purple"
                    onPress={() => navigation.navigate('Home')} // Correção aqui
                />
            </View>
        </View>
    );
}
