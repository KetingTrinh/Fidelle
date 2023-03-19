import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import Sperm from '../components/Sperm';
import Obstacles from '../components/Obstacles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

const Game = () => {

    const navigation = useNavigation()

    const goToHome = () => {
        navigation.replace("Home")
    }

    const screenWidth = Dimensions.get("screen").width
    const screenHeight = Dimensions.get("screen").height
    const spermLeft = screenWidth/2
    const gravity = 3
    const obstacleWidth = 60
    const obstacleHeight = 300
    const gap = 200
    const [spermBottom, setSpermBottom] = useState(screenHeight/2)
    const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
    const [obstaclesLeftTwo, setObstaclesLeftTwo] = useState(screenWidth + screenWidth/2 + obstacleWidth/2)
    const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0)
    const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0)
    const [score, setScore] = useState(0)
  
    let gameTimerId
    let obstaclesLeftTimerId
    let obstaclesLeftTimerIdTwo
    const [isGameOver, setIsGameOver] = useState(false)
  
    // Start Sperm Falling 
    useEffect(() => {
      if (spermBottom > 0) {
        gameTimerId = setInterval(() => {
          setSpermBottom(spermBottom => spermBottom - gravity)
        }, 30)
  
        return () => {
          clearInterval(gameTimerId)
        }
      }
    }, [spermBottom])
  
    const jump = () => {
      if (!isGameOver && (spermBottom < screenHeight)) {
        setSpermBottom(spermBottom => spermBottom + 50)
        console.log("jump!")
        console.log("Current : ", score)
      }
    }
  
  
    // Start first obstacles
    useEffect(() => {
      if (obstaclesLeft > - obstacleWidth){
        obstaclesLeftTimerId = setInterval(() => {
          setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
        }, 30)
        
        return () => {
          clearInterval(obstaclesLeftTimerId)
        }
      } else {
        setObstaclesLeft(screenWidth)
        setObstaclesNegHeight(- Math.random() * 100)
        setScore(score => score+1)
      }
    }, [obstaclesLeft])
  
    // Start second obstacles
    useEffect(() => {
      if (obstaclesLeftTwo > - obstacleWidth){
        obstaclesLeftTimerIdTwo = setInterval(() => {
          setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
        }, 30)
        
        return () => {
          clearInterval(obstaclesLeftTimerIdTwo)
        }
      } else {
        setObstaclesLeftTwo(screenWidth)
        setObstaclesNegHeightTwo(- Math.random() * 200)
        setScore(score => score + 1)
      }
    }, [obstaclesLeftTwo])
  
    // Check for collisions
    useEffect(() => {
      if (
        ((spermBottom < (obstaclesNegHeight + obstacleHeight + 30) || 
        spermBottom > (obstaclesNegHeight + obstacleHeight + gap - 30)) && 
        (obstaclesLeft > screenWidth/2 - 30 && obstaclesLeft < screenWidth/2 +30)
        )
        || 
        ((spermBottom < (obstaclesNegHeightTwo + obstacleHeight + 30) || 
        spermBottom > (obstaclesNegHeightTwo + obstacleHeight + gap - 30)) && 
        (obstaclesLeftTwo > screenWidth/2 - 30 && obstaclesLeftTwo < screenWidth/2 +30)
        )
      ){
        console.log('game over')
        gameOver()
        setIsGameOver(true)
      }
  
    })
  
    const gameOver = () => {
      clearInterval(gameTimerId)
      clearInterval(obstaclesLeftTimerId)
      clearInterval(obstaclesLeftTimerIdTwo)
    }
  
    return (
      <TouchableWithoutFeedback onPress={jump}>
        <View style={styles.container}>
          
          <Sperm
            spermBottom={spermBottom}
            spermLeft={spermLeft}
          />
  
          <Obstacles
            color = {'green'}
            obstacleWidth = {obstacleWidth}
            obstacleHeight = {obstacleHeight}
            randomBottom = {obstaclesNegHeight}
            gap = {gap}
            obstaclesLeft = {obstaclesLeft}
          />
  
          <Obstacles
            color = {'red'}
            obstacleWidth = {obstacleWidth}
            obstacleHeight = {obstacleHeight}
            randomBottom = {obstaclesNegHeightTwo}
            gap = {gap}
            obstaclesLeft = {obstaclesLeftTwo}
          />
  
          {isGameOver && <View>
            <Text style={styles.text}>You {score} points!</Text>
            <TouchableOpacity onPress={goToHome}>
                <Text>Let's go home</Text>
            </TouchableOpacity>

          </View>
            }


        </View>
      </TouchableWithoutFeedback>
    );
}

export default Game

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text : {
        fontSize: 40,
      },
})