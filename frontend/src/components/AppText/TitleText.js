import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import defaultStyles from '../../config/styles.js'

export default function TitleText({title}) {
  return (
    <Text style={[defaultStyles.text,styles.text]}>
      {title}
    </Text>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        fontWeight: "bold"
    }
})