import React from 'react'
import { Image, StyleSheet, View } from 'react-native';

const Header = () => {
  return (
    <View>
         <Image source={require('../assets/Mob-header-app.jpg')} 
         style={{ width: 400, height: 118 }}/>
    </View>
  )
}

export default Header