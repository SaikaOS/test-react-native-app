import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import MyInput from "../components/MyInput";
import { useDispatch, useSelector } from "react-redux";
import { loggedIn, loggedOut, setLogin, setPassword } from "../store/authSlice";
import Header from "../components/Header";

export const LOGIN = "Sayan";
export const PASSWORD = "2003";

const AuthPage = ({navigation}) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.auth);
  const handleSubmit = () => {
    if (state.login !== LOGIN || state.password !== PASSWORD) {
      alert('Incorrect login or password. Please try again');
    } else {
      dispatch(loggedIn())
      navigation.navigate('Main')
    }
  };
  useEffect(() => {
    dispatch(loggedOut())
  }, [])
  return (
    <View>
        <Header />
        <View style={styles.wrapper}>
      <Text style={styles.title}>Autorization</Text>
      <View style={styles.block}>
        <Text style={styles.text}>login</Text>
        <MyInput
          value={state.login}
          onChangeText={(e) => dispatch(setLogin(e))}
        />
      </View>
      <View style={styles.block}>
        <Text style={styles.text}>password</Text>
        <MyInput
          value={state.password}
          onChangeText={(e) => dispatch(setPassword(e))}
          secureTextEntry={true}
          onSubmitEditing={handleSubmit}
        />
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    height: 301,
    width: 290,
    borderColor: "#27569C",
    borderWidth: 3,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 50,
  },
  block: {
    display: "flex",
    justifyContent: "space-between",
    height: 80,
    margin: 10,
  },
  title: {
    color: "#27569C",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 30,
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
});

export default AuthPage;
