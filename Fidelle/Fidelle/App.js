import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Sperm from './components/Sperm';

export default function App() {

  const screenWidth = Dimensions.get("screen").width
  const screenHeight = Dimensions.get("screen").height
  const spermLeft = screenWidth/2
  const [spermBottom, setSpermBottom] = useState(screenHeight/2)
  const gravity = 3
  let gameTimerId

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

  return (
    <View style={styles.container}>
      <Sperm
        spermBottom={spermBottom}
        spermLeft={spermLeft}
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
