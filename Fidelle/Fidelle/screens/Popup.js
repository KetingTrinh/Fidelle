import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'



const Popup = () => {

    

    const [fontLoaded] = useFonts(
      {
          "PlayfairDisplay-Regular": require("../assets/fonts/PlayfairDisplay-Regular.ttf"),
          "PlayfairDisplay-Bold": require("../assets/fonts/PlayfairDisplay-Bold.ttf")
      });
    if (!fontLoaded) {
      return undefined;
    } 

    const { finalScore } = require('./Game')

    const navigation = useNavigation()

    const goToGame = () => {
        navigation.replace("Game")
    }
    const goToChpOne = () => {
      navigation.replace("Chapter One")
  }

    console.log(finalScore)

    return (
    <View style={styles.container}>
      <Text style={styles.h1}>Game Over</Text>
      <Text style={styles.h2}>Score {finalScore}</Text>
      <TouchableOpacity onPress = {goToGame} style = {styles.button}>
        <Text style = {[styles.h3]}>
          Play Again
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress = {goToChpOne} style = {styles.button}>
        <Text style = {[styles.h3]}>
            Back to Chapter
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Popup

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#9BBBF4",
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1 : {
      marginTop: 20,
      fontSize: 70,
      fontFamily: 'PlayfairDisplay-Bold',
      color: 'white',
      marginVertical: 50
    },
    h2 : {
      fontSize: 50,
      fontFamily: 'PlayfairDisplay-Regular',
      color: 'white',
      marginVertical: 10
    },
    h3 : {
      fontSize: 20,
      fontFamily: 'PlayfairDisplay-Regular',
      color: '#242D3D',
      marginVertical: 10,
    },
    button: {
      borderWidth:1,
      borderRadius:20,
      borderColor: '#9BBBF4',
      backgroundColor:'white',
      padding:10,
      height:100,
      width :200,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical : 30
    }
})