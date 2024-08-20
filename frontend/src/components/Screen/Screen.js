import { SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native'
import React from 'react'

export default function Screen(props) {
  return (
      <SafeAreaView style={styles.screen}>
        {props.children}
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    }
})


// we can use constants to manage top height 