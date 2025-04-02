import { StyleSheet, Text, View, Platform, ScrollView, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'

export default function Premium() {
  return (
    <SafeAreaView style={styles.viewContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
              <View style={styles.centeredContainer}>
                <Text style={styles.textContainer}>this is the premium page</Text>
              </View>
            </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    viewContainer: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  scrollContainer: {
    flexGrow: 1, 
    justifyContent: "center", 
    alignItems: "center",
  },
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  textContainer: {
    color: "white",
    fontSize: 20,
  }
})