import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";

const IndexScreen = () => {
  const { state, addBlogPost, clearBlogPosts } = useContext(Context);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Post" onPress={() => addBlogPost()} />
      <Button title="Clear" onPress={() => clearBlogPosts()} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
