import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Sperm = ({spermBottom, spermLeft}) => {
    const spermWidth = 50
    const spermHeight = 60

  return (
    <View style={{
        position: 'absolute',
        backgroundColor: 'blue',
        width: spermWidth,
        height: spermHeight,
        left: spermLeft - (spermWidth/2),
        bottom: spermBottom //- (spermHeight/2)
    }}/>
  )
}

export default Sperm

const styles = StyleSheet.create({

})