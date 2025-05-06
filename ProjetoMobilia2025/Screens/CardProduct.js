import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardProduct ({id, nome, valor, imagem}) {
    return (
        <View style={styles.card}>
            <Image
                style={{width: 100, height: 100}}
                source={{uri: imagem}}
            />
            <Text>ID: {id}</Text>
            <Text>{nome}: {valor}</Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    txt: {
        fontSize: 25,
        color: '#23fd'
    },
    card: {
        backgroundColor: '#f123',
        padding: 4,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})