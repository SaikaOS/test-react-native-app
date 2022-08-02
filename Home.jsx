import React from 'react'
import Header from './components/Header';
import { StyleSheet, View } from "react-native";
import AuthPage from './pages/AuthPage';

const Home = () => {
  return (
    <View style={styles.container}>
        <Header />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default Home