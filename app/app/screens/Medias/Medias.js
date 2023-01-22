import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import Title from '../components/Title'
import colors from '../../config/colors'
import Voltar from '../components/Voltar'

export default function Main({ navigation }) {

    return (
        <View style={styles.container}>
            <Title title="Médias" />
            <Text style={styles.textWelcome}>
                Quanto você precisa para passar; outra para saber quanto você precisa para ter média geral 8; uma para saber quanto você precisa para ter média geral 9
            </Text>
            <View style={styles.buttons}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { navigation.navigate("Media6") }}>
                    <Text style={styles.textButton}>Média 6</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { navigation.navigate("Media8") }}>
                    <Text style={styles.textButton}>Média 8</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => { navigation.navigate("Media9") }}>
                    <Text style={styles.textButton}>Média 9</Text>
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
    textWelcome: {
        fontSize: 16,
        textAlign: 'justify',
        paddingVertical: 10,
        color: colors.white,
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
        fontSize: 24,
        color: colors.white,
    },
})