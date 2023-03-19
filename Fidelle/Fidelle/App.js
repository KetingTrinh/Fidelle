import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Sperm from './components/Sperm';
import Obstacles from './components/Obstacles';

export default function App() {

  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height
  const spermLeft = screenWidth/2
  const [spermBottom, setSpermBottom] = useState(screenHeight/2)
  const [obstaclesLeft, setObstaclesLeft] = useState(screenWidth)
  const gravity = 3
  const obstacleWidth = 60
  const obstacleHeight = 300
  const gap = 200

  let gameTimerId
  let obstaclesLeftTimerId


  // Start Bird Falling 
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
  console.log(spermBottom)

  // Start first obstacles
  useEffect(() => {
    if (obstaclesLeft > - obstacleWidth){
      obstaclesLeftTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
      }, 30)
    }

    return () => {
      clearInterval(obstaclesLeftTimerId)
    }
  }, [obstaclesLeft])

  return (
    <View style={styles.container}>
      <Sperm
        spermBottom={spermBottom}
        spermLeft={spermLeft}
      />

      <Obstacles
        obstacleWidth = {obstacleWidth}
        obstacleHeight = {obstacleHeight}
        gap = {gap}
        obstaclesLeft = {obstaclesLeft}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
