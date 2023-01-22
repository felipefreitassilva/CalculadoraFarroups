import React from 'react'
import { Text, StyleSheet } from 'react-native'

import colors from '../../config/colors'

export default function Title(props) {
  return (
    <Text style={styles.title}>{props.title}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    fontSize: 32,
    textAlign: 'center',
    color: colors.white,
    paddingBottom: 8,
    borderBottomWidth: 3,
    borderBottomColor: colors.primary,
  },
})