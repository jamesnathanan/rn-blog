import React, { useReducer } from "react";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogPost":
      return [...state, { title: `BLog Post #${state.length + 1}` }];
    case "clear":
      return [];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogPost" });
  };
};

const clearBlogPosts = (dispatch) => {
  return () => {
    dispatch({ type: "clear" });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, clearBlogPosts },
  []
);
