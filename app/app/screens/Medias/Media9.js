import React from 'react'
import { View, StyleSheet } from 'react-native'

import colors from '../../config/colors'
import Title from '../components/Title'
import Media from './Media'
import Voltar from '../components/Voltar'

export default function Media9({ navigation }) {
  return (
    <View style={styles.container}>
      <Title title="Média 9" />
      <Media T3={54} />
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
})