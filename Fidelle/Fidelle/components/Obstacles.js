import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Obstacles = ({obstaclesLeft, obstacleWidth, obstacleHeight, gap}) => {
   
    return (
        <>
            <View style = {{
                position: 'absolute',
                backgroundColor: 'green',
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: 0 + obstacleHeight + gap,
            }}/>

            <View style = {{
                position: 'absolute',
                backgroundColor: 'green',
                width: obstacleWidth,
                height: obstacleHeight,
                left: obstaclesLeft,
                bottom: 0,
            }}>
            </View>
        </>
    )
}

export default Obstacles

const styles = StyleSheet.create({})