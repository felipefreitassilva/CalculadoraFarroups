import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

import Title from './components/Title'
import colors from '../config/colors'

export default function Main({ navigation }) {
  return (
    <View style={styles.container}>
      <Title title="Bem-vindo!" />
      <Text style={styles.textWelcome}>
        Aqui existem 3 opções de calculadora; uma para saber a nota que você precisa no terceiro trimestre (Médias); uma para ver sua média final (Geral); e uma última para calcular seu GPA.
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigation.navigate("Medias") }}>
          <Text style={styles.textButton}>Médias</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigation.navigate("GPrompt", { title: "Média Geral" }) }}>
          <Text style={styles.textButton}>Geral</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigation.navigate("Prompt", { title: "Média 9º ano" }) }}>
          <Text style={styles.textButton}>GPA</Text>
        </TouchableOpacity>
      </View>
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