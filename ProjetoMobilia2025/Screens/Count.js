import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { useState } from 'react'; // react: usa tanto para web e para mobile

export default function Count () {
    const [contador, setContador] = useState(0); // definicao de uma variável que utiliza usestate

    function Aumentar () {
        setContador(contador+1)
    }

    function Diminuir () {
        if (contador > 0) {
            setContador(contador-1)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Meu Contador</Text>
            <Text style={styles.txt}>{contador}</Text>
            <View style={styles.button}>
                <TouchableOpacity style={styles.buttonTouch} onPress={Aumentar}>+</TouchableOpacity>
                <TouchableOpacity style={styles.buttonTouch} onPress={Diminuir}>-</TouchableOpacity>
                <Button
                    title='+'
                    color={'red'}
                    onPress={Aumentar}
                />
                <Button
                    title='-'
                    color={'red'}
                    onPress={Diminuir}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
    },
    title: {
        fontSize: 40,
        color: 'red',
    },
    txt: {
        fontSize: 15,
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        gap: 15,
    },
    buttonTouch: {
        backgroundColor: 'red',
    }
})