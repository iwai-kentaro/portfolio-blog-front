import { atom, useAtom } from "jotai";
import Post from "../../../models/post";
import { useCallback } from "react";

export const postsState = atom<Post[]>([]);

export const usePostsState = () => {
  const [state, setState] = useAtom(postsState);

  const createPost = useCallback(
    (post: Post) => {
      setState((prevState) => [...prevState, post]);
    },
    [setState]
  );

  const deletePost = useCallback(
    (id: number) => {
      setState((prevState) => prevState.filter((post) => post.id !== id));
    },
    [setState]
  );

  const updatePost = useCallback(
    (id: number, updatedPost: Post) => {
      setState((prevState) =>
        prevState.map((post) => (post.id === id ? updatedPost : post))
      );
    },
    [setState]
  );

  return {
    posts: state,
    setPosts: setState,
    createPost,
    deletePost,
    updatePost,
  };
};
