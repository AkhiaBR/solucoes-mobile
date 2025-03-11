// import de componentes
import {View, Text, StyleSheet, Image, Button} from "react-native";

export default function Profile() {
    return(
        <View style={styles.containerProfile}>
            <Text>Esse é meu Perfil!</Text>

            <Button>Clique</Button>

            <Image style={{width: 200, height: 200}} source={require('../assets/arma3.jpg')}/>
        </View>
    )
}

export function Gallery() { // as vezes, nao precisa ser: EXPORT function Gallery(), porque o unico componente sendo exportado é o Profile, e Artist e Gallery já estão incluídos em Profile
    return(
        <View style={styles.containerGallery}>
            <Text>Essa é minha galeria!</Text>
        </View>
    )
}

export function Artist() {
    return (
        <View style={styles.containerArtist}>
            <Text>Esses são os artistas!</Text>
        </View>
    )
}

// CSS
const styles = StyleSheet.create({
    containerProfile: {
      flex: 1,
      backgroundColor: 'white'
    },

    containerArtist: {
        flex: 2,
        backgroundColor: 'red'
    },

    containerGallery: {
        flex: 3,
        backgroundColor: 'blue'
    }
  });
  