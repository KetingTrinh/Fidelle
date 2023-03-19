import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Obstacles = ({
        color, 
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
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom + obstacleHeight + gap,
            }}/>

            <View style = {{
                position: 'absolute',
                backgroundColor: color,
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: randomBottom,
            }}>
            </View>
        </>
    )
}

export default Obstacles

const styles = StyleSheet.create({})