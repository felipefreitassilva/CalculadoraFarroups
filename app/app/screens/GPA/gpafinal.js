import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import Title from '../components/Title'
import Voltar from '../components/Voltar'
import colors from '../../config/colors'


export default function Gpafinal({ navigation, route }) {

    const media9ano = route.params.media9ano
    const media1ano = route.params.media1ano
    const media2ano = route.params.media2ano
    const media3ano = route.params.media3ano
    const GPAFinal = parseFloat((((media9ano + media1ano + media2ano + media3ano) / 4) * 4) / 10).toFixed(2) || null

    function Sair() {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={() => { navigation.navigate("Main") }}
            >
                <Text style={styles.buttonText}>Sair</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Title title="GPA final" />
            <View>
                <Text>Sua média no 9º ano: {media9ano}</Text>
                <Text>Sua média no 1º ano: {media1ano}</Text>
                <Text>Sua média no 2º ano: {media2ano}</Text>
                <Text>Sua média no 3º ano: {media3ano}</Text>
                <Text>Seu GPA final: </Text>
            </View>
            <View style={styles.wrapperNotaFinal}>
                <Text style={styles.notaFinal}>{GPAFinal}</Text>
            </View>
            <Sair />
            <Voltar navigation={navigation} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.secondary,
    },
    wrapperNotaFinal: {
        marginTop: 150,
        width: 90,
        height: 90,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderRadius: 22.5,
        borderColor: colors.primary,
    },
    notaFinal: {
        fontSize: 38,
        color: colors.white,
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderWidth: 3,
        borderRadius: 40,
        borderColor: colors.primary,
        right: 20,
        bottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
    },
    buttonText: {
        fontWeight: '400',
        color: colors.white,
    },
})