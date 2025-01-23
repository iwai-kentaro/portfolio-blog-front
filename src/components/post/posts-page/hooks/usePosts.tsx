import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { usePostsState } from "../../../../contexts/jotai/post-state/usePostsState";
import apiConfig from "../../../../config/apiConfig";

const usePosts = () => {
  const { posts, setPosts, deletePost } = usePostsState();
  const [loading, setLoading] = useState(false);
  const apiBaseUrl = apiConfig.baseUrl;

  const getPostsFetch = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://portfolio-blog-ki-4bfc16ba3d6f.herokuapp.com/api/v1/posts`
      );

      setPosts(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [apiBaseUrl, setPosts]);

  useEffect(() => {
    getPostsFetch();
  }, [getPostsFetch]);

  const handleDelete = useCallback(
    async (id: number) => {
      try {
        setLoading(true);
        await axios.delete(`${apiBaseUrl}/api/v1/posts/${id}`);

        deletePost(id);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    },
    [apiBaseUrl, deletePost]
  );

  return { posts, handleDelete, loading };
};
export default usePosts;
