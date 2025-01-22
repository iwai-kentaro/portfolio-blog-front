import axios from "axios";
import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePostsState } from "../../../../contexts/jotai/post-state/usePostsState";

const usePost = () => {
  const id = Number(useParams().id);
  const { posts, createPost } = usePostsState();

  const getPostFetch = useCallback(
    async (id: number) => {
      if (!id) return;
      try {
        const res = await axios.get(`http://localhost:3000/api/v1/posts/${id}`);
        createPost(res.data);
      } catch (e) {
        console.log(e);
      }
    },
    [createPost]
  );

  useEffect(() => {
    getPostFetch(id);
  }, [getPostFetch, id]);

  return { id, post: posts.find((post) => post.id === id) };
};
export default usePost;
