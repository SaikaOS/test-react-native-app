import { View, FlatList, StyleSheet, RefreshControl } from "react-native";
import React from "react";
import { useEffect } from "react";
import { fetchPosts, fetchUsers } from "../store/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import PostItem from "./PostItem";

const Posts = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const title = posts.posts.map((post) => post.title);
  const userName = posts.users.map((user) => user.name);
  const userCompanyName = posts.users.map((user) => user.company.name);
  const getRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  useEffect(() => {
    setRefreshing(true);
    dispatch(fetchPosts(getRandomNum(5, 10)));
    dispatch(fetchUsers());
    setRefreshing(false);
  }, []);
  return (
    <View style={styles.post}>
      <FlatList
        data={posts.posts}
        showsVerticalScrollIndicator={false}
        renderItem={({ index }) => (
          <PostItem
            key={index}
            title={title[index]}
            name={userName[index]}
            userCompanyName={userCompanyName[index]}
          />
        )}
        keyExtractor={(post) => {
          post.id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
  },
});

export default Posts;
