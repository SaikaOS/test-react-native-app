import React from "react";
import { TextInput, StyleSheet } from "react-native";

const MyInput = (props) => {
  return <TextInput style={styles.input} {...props}/>;
};

const styles = StyleSheet.create({
  input: {
    width: 212,
    height: 33,
    borderWidth: 2,
    borderColor: "#27569C",
    padding: 3,
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
    marginBottom: 20,
  },
});

export default MyInput;
