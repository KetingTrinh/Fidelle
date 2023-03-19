import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Sperm = ({spermBottom, spermLeft}) => {
    const spermWidth = 220
    const spermHeight = 60

  return (
    <View style={{
        position: 'absolute',
        // backgroundColor: 'blue',
        width: spermWidth,
        height: spermHeight,
        left: spermLeft - (spermWidth/2),
        bottom: spermBottom //- (spermHeight/2)
    }}>
      <Image source = {require('../assets/spermy_wormy.png')} style = {styles.image}/>
    </View>
  )
}

export default Sperm

const styles = StyleSheet.create({
  image: {
    // width: '100%',
    // marginRight: 300 ,
    // flexDirection: 'column-reverse',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    direction: 'ltr',
    borderWidth: 10,
    // overflow: 'hidden',
    objectFit: 'cover',
  },
})