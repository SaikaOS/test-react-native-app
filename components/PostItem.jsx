import { View, Text, StyleSheet } from "react-native";
import React from "react";

const PostItem = ({ id, title, name, userCompanyName }) => {
  return (
    <View key={id} style={styles.item}>
      <Text style={styles.text}>Author: {name}</Text>
      <Text style={styles.text}>Company: {userCompanyName}</Text>
      <Text style={styles.text}>Title:{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 5,
    borderWidth: 3,
    borderColor: "#27569C",
    borderRadius: 6,
    fontWeight: 700,
    height: 200,
    width: 292,
    marginBottom: 20,
  },
  text: {
    fontWeight: "900",
    fontSize: 16,
  }
});

export default PostItem;
