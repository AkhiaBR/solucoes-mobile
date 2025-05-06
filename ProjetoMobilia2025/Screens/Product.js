import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { useState } from "react";
import CardProduct from "./CardProduct";

export default function Product () {
    const [produtos, setProdutos] = useState([ // tem [] porque é um array e {} porque é um dicionário
        {id: 1, nome: 'Banana Dourada', valor: 2000.00, imagem: 'https://thumbs.dreamstime.com/b/banana-dourada-25239943.jpg'},
        {id: 2, nome: 'Vicenzo', valor: 1000.00, imagem: 'https://thumbs.dreamstime.com/b/banana-dourada-25239943.jpg'},
        {id: 3, nome: 'Canela', valor: 20.00, imagem: 'https://thumbs.dreamstime.com/b/banana-dourada-25239943.jpg'},
        {id: 4, nome: 'Sabonete de Mármore', valor: 35.50, imagem: 'https://thumbs.dreamstime.com/b/banana-dourada-25239943.jpg'},
        {id: 5, nome: 'Óleo de Dragão', valor: 780.00, imagem: 'https://thumbs.dreamstime.com/b/banana-dourada-25239943.jpg'},
        {id: 6, nome: 'Chá Estelar', valor: 150.00, imagem: 'https://thumbs.dreamstime.com/b/banana-dourada-25239943.jpg'},
        {id: 7, nome: 'Lâmpada do Infinito', valor: 2999.99, imagem: 'https://thumbs.dreamstime.com/b/banana-dourada-25239943.jpg'},
        {id: 8, nome: 'Pó de Lua Cheia', valor: 89.90, imagem: 'https://thumbs.dreamstime.com/b/banana-dourada-25239943.jpg'},
        {id: 9, nome: 'Colar de Neblina', valor: 1200.00, imagem: 'https://thumbs.dreamstime.com/b/banana-dourada-25239943.jpg'},
        {id: 10, nome: 'Relógio do Tempo Perdido', valor: 4500.00, imagem: 'https://thumbs.dreamstime.com/b/banana-dourada-25239943.jpg'}
    ])

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Produtos</Text>
            {/* {produtos.map((item) => (
                <Text>{item.nome}: R$ {item.valor.toFixed(2)}</Text>
            ))} */}
            <FlatList
                data={produtos}
                renderItem={({item}) => (
                    <CardProduct
                        id = {item.id}
                        nome = {item.nome}
                        valor = {item.valor}
                        imagem = {item.imagem}
                    />
                )}
                keyExtractor={item => item.id}
            />
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
        margin: 4,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})