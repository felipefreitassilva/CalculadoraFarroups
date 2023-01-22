import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import Title from '../components/Title'
import Voltar from '../components/Voltar'
import colors from '../../config/colors'


export default function GPrompt({ navigation, route }) {

    const title = route.params.title

    return (
        <View style={styles.container}>
            <Title title={title} />
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { navigation.navigate("geral9ano") }}>
                    <Text style={styles.textButton}>Média 9º ano</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { navigation.navigate("geral1ano") }}>
                    <Text style={styles.textButton}>Média 1º ano</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { navigation.navigate("geral2ano") }}>
                    <Text style={styles.textButton}>Média 2º ano</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { navigation.navigate("geral3ano") }}>
                    <Text style={styles.textButton}>Média 3º ano</Text>
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
    buttons: {
        flex: 1,
        alignItems: 'center',
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