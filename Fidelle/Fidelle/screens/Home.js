import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import { useFonts } from 'expo-font'



const Home = () => {
  const [fontLoaded] = useFonts(
    {
        "PlayfairDisplay-Regular": require("../assets/fonts/PlayfairDisplay-Regular.ttf"),
        "PlayfairDisplay-Bold": require("../assets/fonts/PlayfairDisplay-Bold.ttf")
    });
  if (!fontLoaded) {
    return undefined;
  } 

    const navigation = useNavigation()

    const goToGame = () => {
        navigation.replace("Game")
    }
    const goToChpOne = () => {
      navigation.replace("Chapter One")
  }

    console.log("You is home")
  return (
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image source = {require("../assets/home.png")} style ={styles.image}/>
      </View>
      
      {/* <View style={styles.imageContainer}>
        <Image source = {require("../assets/home.png")}/>
      </View> */}
      <View style={styles.container}>
        <Text style={styles.h1}>Home</Text>
      </View>
      
      
      <TouchableOpacity onPress = {goToChpOne} >
        <Text style = {[styles.tile, styles.h3]}>
            1. Fertilization Retold
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style = {[styles.tile, styles.h3]}>
            2. Destigmatize STD
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style = {[styles.tile, styles.h3]}>
            3. Reproductive Rights
        </Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        margin: 20
    },
    image:{
      // height: '100%',
      width: 400,
      objectFit:'contain'
    },
    imageContainer:{
        // position: 'relative',
        height: 300,
        marginBottom: 100,
    },
    h1 : {
      marginTop: 20,
      fontSize: 70,
      fontFamily: 'PlayfairDisplay-Bold',
      marginBottom: 60,
    },
    h2 : {
        fontSize: 30,
        fontFamily: 'PlayfairDisplay-Regular',
        marginVertical:10,
    },
    h3 : {
      fontSize: 20,
      fontFamily: 'PlayfairDisplay-Bold',
      color: '#242D3D',
      marginVertical: 10,
    },
    article : {
        textAlign: 'justify',
        fontFamily: 'PlayfairDisplay-Regular',
        // fontWeight: 'bold'
    },
    tile : {
      backgroundColor: "#B8D1FF",
      borderRadius : 20,
      padding : 30,
      width : 400,
      marginVertical : 30
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