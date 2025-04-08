import {View, Stylesheet, Button, Text, Image, ScrollView} from "react-native";

export default function Feed () {
    return (
        <ScrollView>
            <View>
                <Text>O que é Arma 3?</Text>
                <View>
                    <Image source={require('../assets/arma3.jpg')} />
                    <Text>ARMA 3 é um videojogo de mundo aberto militar tático de tiro em primeira e terceira pessoa desenvolvido pelo estúdio checo Bohemia Interactive Studio, para Microsoft Windows. Foi lançado em 12 de setembro de 2013.</Text>
                    <Button
                            title="Saiba mais" 
                            color="purple"
                            onPress={() => NavigationActivation.navigate('Home')}
                    />
                </View>
                <View>
                    <Image source={require('../assets/arma3_2.jpg')} />
                    <Text>Jogar ARMA 3 é muito bom!</Text>
                    <Button
                            title="Saiba mais" 
                            color="purple"
                            onPress={() => NavigationActivation.navigate('Home')}
                    />
                </View>
            </View>
        </ScrollView>
    )
}