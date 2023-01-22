import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import colors from '../../config/colors'

export default function Voltar({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => { navigation.goBack() }}
    >
      <Text style={styles.buttonText}>Voltar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderWidth: 3,
    borderRadius: 40,
    borderColor: colors.primary,
    left: 20,
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