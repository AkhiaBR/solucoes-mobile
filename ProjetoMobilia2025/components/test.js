// Import de bibliotecas
import {View, Text, StyleSheet, Image, Button, TextInput} from "react-native";

export default function Test() {
    return (
        <View style={styles.container}>
                <Text style={styles.titulo}>O que é Arma 3?</Text>
            <View style={styles.viewing}>
                <Image style={styles.img} source={require('../assets/arma3.jpg')} />
            </View>
                <Text style={styles.txt}>ARMA 3 é um videojogo de mundo aberto militar tático de tiro em primeira e terceira pessoa desenvolvido pelo estúdio checo Bohemia Interactive Studio, para Microsoft Windows. Foi lançado em 12 de setembro de 2013.</Text>
            <View style={styles.row}>
                <Image style={styles.img} source={{ uri: 'https://s2-techtudo.glbimg.com/bMRSnRU-m4zxX-TfUE7i-brNlsk=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/T/z/xgPHvfRpiXQE8VbZ7m5w/2014-05-26-arma-3-mirando-com-o-rifle.jpg' }} />
                <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzShDHBGytP7ZtZtJeS0mG5JGsC2csqY8aw&s' }} />
            </View>
                <Text style={styles.credits}>Feito por: Fernando Gonçalves</Text>
                <TextInput
                    style={styles.txtinput}
                    placeholder="Nome"
                    placeholderTextColor={'white'}
                />
                <TextInput
                    style={styles.txtinput}
                    placeholder="Mensagem"
                    placeholderTextColor={'white'}
                />
                <Button
                    title='Enviar'
                    color='blue'
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
        justifyContent: 'space-evenly',
    },
    titulo: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 50,
    },
    img: {
        width: 200,
        height: 200,
        borderRadius: 5,
        padding: 20,
    },
    viewing: {
        alignItems: 'flex-end',
    },
    txt: {
        fontSize: 20,
        alignSelf: 'flex-end',
        color: 'white',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 20,
    },
    credits: {
        alignSelf: 'center',
        color: 'white',
    },
    txtinput: {
        borderWidth: '1',
        borderColor: 'white',
        borderRadius: 5,
        padding: 5,
    }
});
