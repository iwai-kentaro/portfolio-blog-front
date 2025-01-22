import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostTitleValueState } from "../../../../contexts/jotai/post-state/usePostTitleValueState";
import { usePostsState } from "../../../../contexts/jotai/post-state/usePostsState";
import { usePostContentValueState } from "../../../../contexts/jotai/post-state/usePostContentValueState";

const useCreatePost = () => {
  const { titleValue, setTitleValue } = usePostTitleValueState();
  const { contentValue, setContentValue } = usePostContentValueState();
  const { createPost } = usePostsState();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContentValue(e.target.value);
  };

  const handleSubmit = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/v1/posts", {
        title: titleValue || "",
        content: contentValue || "",
      });
      createPost(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setTitleValue("");
      setContentValue("");
      setLoading(false);
      navigate("/posts");
    }
  }, [
    contentValue,
    createPost,
    navigate,
    setContentValue,
    setTitleValue,
    titleValue,
  ]);

  return {
    titleValue,
    handleTitleChange,
    contentValue,
    handleContentChange,
    handleSubmit,
    loading,
  };
};
export default useCreatePost;
