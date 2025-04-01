import {View, Stylesheet, Text, Image} from "react-native";

export default function Home() {
    return (
        <View>
                <Text>O que é Arma 3?</Text>
            <View>
                <Image source={require('../assets/arma3.jpg')} />
            </View>
                <Text>ARMA 3 é um videojogo de mundo aberto militar tático de tiro em primeira e terceira pessoa desenvolvido pelo estúdio checo Bohemia Interactive Studio, para Microsoft Windows. Foi lançado em 12 de setembro de 2013.</Text>
                <Text>Feito por: Fernando Gonçalves</Text>
        </View>
    )
}