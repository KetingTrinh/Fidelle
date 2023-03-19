import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'



const Home = () => {

    const navigation = useNavigation()

    const goToGame = () => {
        navigation.replace("Game")
    }

    console.log("You is home")
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress = {goToGame}>
        <Text style = {{
            borderWidth:2,
            borderRadius:20,
            marginRight:30,
            marginVertical:30,
            backgroundColor:'white',
            padding:10,
            height:450,
            width :400}}>

            START GAME!
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1
    },
})