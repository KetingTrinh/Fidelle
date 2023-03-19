import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'


const Popup = () => {

    const { finalScore } = require('./Game')

    const navigation = useNavigation()

    const goToGame = () => {
        navigation.replace("Game")
    }
    const goToHome = () => {
      navigation.replace("Home")
  }

    console.log(finalScore)

    return (
    <View style={styles.container}>
      <Text>Game over</Text>
      <TouchableOpacity onPress = {goToGame}>
        <Text style = {{
            borderWidth:2,
            borderRadius:20,
            backgroundColor:'white',
            padding:10,
            height:250,
            width :400}}>
            Score : {finalScore} 
            PLAY AGAIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress = {goToHome}>
        <Text style = {{
            borderWidth:2,
            borderRadius:20,
            backgroundColor:'white',
            padding:10,
            height:250,
            width :400}}>
            GO HOME
            
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

    }
})