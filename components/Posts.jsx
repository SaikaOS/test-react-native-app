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
  const fetchAll = () => {
    dispatch(fetchPosts(getRandomNum(5, 10)));
    dispatch(fetchUsers());
  }
    useEffect(() => {
      fetchAll()
    }, []);
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      fetchAll()
    }, 2000);
  };
  return (
    <View style={styles.post}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
