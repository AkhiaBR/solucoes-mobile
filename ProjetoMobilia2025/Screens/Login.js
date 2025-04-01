import {View, Text, StyleSheet, Image, TextInput, Button} from "react-native";
import { ImageBackground } from "react-native-web";
import Entypo from '@expo/vector-icons/Entypo'; // importa icone

export default function Login({navigation}) {
    return(
        <View>
                <View>
                    <Text>Faça seu login agora:</Text>
                    <TextInput></TextInput>
                    <TextInput></TextInput>
                </View>
                <View>
                    <Button
                        title="Login" 
                        color="purple"
                        onPress={() => NavigationActivation.navigate('Home')}
                        />
                </View>
        </View>
    )
}