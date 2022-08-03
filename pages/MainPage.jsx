import React from 'react'
import { Text, View } from 'react-native'
import Header from '../components/Header'
import Posts from '../components/Posts'

const MainPage = () => {
  return (
    <View>
      <Header/>
      <Posts />
    </View>
  )
}

export default MainPage