import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { loggedOut } from "../store/authSlice";

const Header = () => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const navigation = useNavigation();
  const logOut = () => {
    navigation.navigate("Auth")
    dispatch(loggedOut())
  }
  return (
    <View style={{ position: "relative" }}>
      <Image
        source={require("../assets/Mob-header-app.jpg")}
        style={{ width: 400, height: 118 }}
      />
      {state.isLoggedIn &&
        (
          <TouchableOpacity
            style={{
              position: "absolute",
              top: 30,
              right: 25,
            }}
            onPress={() => logOut()}
          >
            <Image
              source={require("../assets/logOut.png")}
              style={{ width: 70, height: 60 }}
            />
          </TouchableOpacity>
        )
      }
    </View>
  );
};

export default Header;
