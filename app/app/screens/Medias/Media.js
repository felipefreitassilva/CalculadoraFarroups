import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

import colors from '../../config/colors';

export default function Media(props) {
  const [notaPrimeiroTrimestre, setNotaPrimeiroTrimestre] = useState()
  const [notaSegundoTrimestre, setNotaSegundoTrimestre] = useState()

  const T1 = parseFloat(notaPrimeiroTrimestre)
  const T2 = parseFloat(notaSegundoTrimestre)
  const T3 = parseFloat(props.T3)

  const equation = (T3 - 2 * T2 - T1) / 3
  const notaTerceiroTrimestre = parseFloat(equation.toFixed(2)) || null

  function fraseErro() {
    if (((T1 > 10) || (T2 > 10)) || ((T1 < 0) || (T2 < 0))) {
      return ("Por favor, digite apenas valores entre 0 e 10")
    }
    if (notaTerceiroTrimestre > 10) {
      return ('Putz')
    }
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.inputWrapper}>
        <View style={styles.input}>
          <Text style={styles.label}>Nota do 1º tri: </Text>
          <TextInput
            style={styles.textInput}
            maxLength={4}
            keyboardType="numeric"
            value={notaPrimeiroTrimestre}
            onChangeText={(value) => {
              setNotaPrimeiroTrimestre(value.replace(',', '.'))
            }}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>Nota do 2º tri: </Text>
          <TextInput
            style={styles.textInput}
            maxLength={4}
            keyboardType="numeric"
            value={notaSegundoTrimestre}
            onChangeText={(value) => {
              setNotaSegundoTrimestre(value.replace(',', '.'))
            }}
          />
        </View>
        <View style={styles.input}>
          <Text style={[styles.label, { marginTop: 10 }]}>
            Sua nota do 3º tri tem que ser:
          </Text>
        </View>
      </View>
      <View style={styles.wrapperNotaAlvo}>
        <Text style={styles.notaAlvo}>{notaTerceiroTrimestre}</Text>
      </View>
      <Text style={styles.fraseFinal}>{fraseErro()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    marginTop: 30,
  },
  input: {
    marginBottom: 25,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  label: {
    fontSize: 18,
    color: colors.white,
  },
  textInput: {
    width: 42,
    height: 42,
    fontSize: 18,
    textAlign: 'center',
    color: colors.white,
    borderWidth: 2.5,
    borderRadius: 2,
    borderColor: colors.primary,
  },
  wrapperNotaAlvo: {
    marginTop: 10,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderRadius: 25,
    borderColor: colors.primary,
  },
  notaAlvo: {
    fontSize: 38,
    color: colors.white,
  },
  fraseFinal: {
    marginTop: 12,
    color: colors.white,
  },
});
