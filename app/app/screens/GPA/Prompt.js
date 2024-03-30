import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import Title from '../components/Title'
import Voltar from '../components/Voltar'
import colors from '../../config/colors'


export default function Prompt({ navigation, route }) {

    const title = route.params.title
    const media9ano = route.params.media9ano || 0
    const media1ano = route.params.media1ano || 0
    const media2ano = route.params.media2ano || 0
    const media3ano = route.params.media3ano || 0

    let next;
    if (title == "Média 9º ano") {
        next = "Media9ano"
    } else if (title == "Média 1º ano") {
        next = "Media1ano"
    } else if (title == "Média 2º ano") {
        next = "Media2ano"
    } else if (title == "Média 3º ano") {
        next = "Media3ano"
    }

    return (
        <View style={styles.container}>
            <Title title={title} />
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { navigation.navigate(next, { grade: true, media9ano: media9ano, media1ano: media1ano, media2ano: media2ano, media3ano: media3ano }) }}>
                    <Text style={styles.textButton}>Já tenho minhas notas</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { navigation.navigate(next, { grade: false, media9ano: media9ano, media1ano: media1ano, media2ano: media2ano, media3ano: media3ano }) }}>
                    <Text style={styles.textButton}>Não tenho minhas notas</Text>
                </TouchableOpacity>
            </View>
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
    button: {
        height: 54,
        width: '85%',
        borderRadius: 80,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
    },
    textButton: {
        fontSize: 20,
        color: colors.white,
    },
})