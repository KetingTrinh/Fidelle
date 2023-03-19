import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect } from 'react'
// import {  } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import Ionicons from '@expo/vector-icons/Ionicons';


const ChapterOne = () => {
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
    const goToHome = () => {
        navigation.replace("Home")
    }
    
    const article = "Everything isn't as it seems, and the narrative of reproduction is no different. After all, the study of medicine was built and developed from the standpoint of man; society is only becoming acutely aware of the contribution. As the tale goes, ejaculation begins the \"survival of the fittest\" along the unforgiving, hostile journey to the \"lazy\" egg. Reality dictates otherwise, the sperm cannot make it alone. The organs in the female reproductive system collectively work together as guides, propelling the sperm in the right direction. The egg itself isn't a mere sitting-duck either; out of the sperm that eventually reach the egg, the egg cherry picks the strongest one — not necessarily the first one."

  return (
    <ScrollView style = {styles.scrollContainer}>
        <View style = {styles.container}>
            <TouchableOpacity onPress = {goToHome} style={{marginTop:50}}>
                <Ionicons name = {'home'} size = {30} color={'#9BBBF4'}/>
            </TouchableOpacity>
        </View>
        <View style = {styles.container}>
            {/* Title */}
            <Text style = {styles.h1}>Chapter 1</Text>
            <Text style = {styles.h2}>It's not just a sperm race</Text>
        </View>
        <View style = {styles.container}>
            <Text style = {styles.h2}>Inside Scoop</Text>
            {/* Article */}
            <Text style = {[styles.article, styles.tile]}>{article}</Text>
            
            <TouchableOpacity
                onPress = {goToGame}
                style = {styles.gameTile}>
                {/* Access Game */}
                <Text style={styles.h2}>Flappy Sperm : Play Now!</Text>

                <Image source = {require('../assets/spermNail.png')} style = {styles.image}/>
            </TouchableOpacity>
        </View>
        <View  style = {styles.container}>
            {/* IDK what to do in here */}
        </View>
        
    </ScrollView>
  )
}

export default ChapterOne

const styles = StyleSheet.create({
    scrollContainer : {
        flex: 1,
        backgroundColor: 'white',
    },
    container : {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical : 10,
        marginHorizontal : 50,
        padding:5,
    }, 
    tile : {
        backgroundColor: "#B8D1FF",
        borderRadius : 20,
        padding : 30,
        width : '100%',
        marginVertical : 20
    },
    gameTile : {
        // borderColor : "#B8D1FF",
        // borderWidth: 5,
        backgroundColor : 'white',
        borderRadius : 20,
        // padding : 30,
        width : '100%',
        height : 400,
        marginVertical : 20,
        justifyContent: 'center',
        alignItems: 'center',

    },
    h1 : {
        marginTop: 20,
        fontSize: 70,
        fontFamily: 'PlayfairDisplay-Bold',
    },
    h2 : {
        fontSize: 30,
        fontFamily: 'PlayfairDisplay-Regular',
        marginVertical:10,
    },
    article : {
        textAlign: 'justify',
        fontFamily: 'PlayfairDisplay-Regular',
        // fontWeight: 'bold'
    },
    image : {
        height: '100%',
        width: '100%',
        borderRadius: 20,
        borderColor : "#B8D1FF",
        borderWidth: 5,
        overflow: 'hidden',
        objectFit: 'cover',
    }
})