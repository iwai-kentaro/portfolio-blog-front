import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { usePostsState } from "../../../../contexts/jotai/post-state/usePostsState";

const usePosts = () => {
  const { posts, setPosts, deletePost } = usePostsState();
  const [loading, setLoading] = useState(false);

  const getPostsFetch = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:3000/api/v1/posts");

      setPosts(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [setPosts]);

  useEffect(() => {
    getPostsFetch();
  }, [getPostsFetch]);

  const handleDelete = useCallback(
    async (id: number) => {
      try {
        setLoading(true);
        await axios.delete(`http://localhost:3000/api/v1/posts/${id}`);

        deletePost(id);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    },
    [deletePost]
  );

  return { posts, handleDelete, loading };
};
export default usePosts;
