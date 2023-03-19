import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Obstacles = ({
        // color, 
        obstaclesLeft, 
        obstacleWidth, 
        obstacleHeight, 
        gap,
        randomBottom,
    }) => {
   
    return (
        <>
            <View style = {{
                position: 'absolute',
                // backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight+ 400,
                left: obstaclesLeft,
                bottom: randomBottom + obstacleHeight + gap,
            }}>

                <Image source = {require('../assets/obstacles.png')} style = {styles.image}/>

            </View>

            <View style = {{
                position: 'absolute',
                // backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom,
            }}>
                <Image source = {require('../assets/obstacles.png')} style = {styles.image}/>
            </View>
        </>
    )
}

export default Obstacles

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderWidth: 10,
        overflow: 'hidden',
        objectFit: 'cover',
    },
})