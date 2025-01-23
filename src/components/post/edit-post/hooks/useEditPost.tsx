import { useCallback, useEffect, useState } from "react";
import { usePostTitleValueState } from "../../../../contexts/jotai/post-state/usePostTitleValueState";
import { usePostContentValueState } from "../../../../contexts/jotai/post-state/usePostContentValueState";
import { usePostsState } from "../../../../contexts/jotai/post-state/usePostsState";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import apiConfig from "../../../../config/apiConfig";

const usePostEdit = () => {
  const { titleValue, setTitleValue } = usePostTitleValueState();
  const { contentValue, setContentValue } = usePostContentValueState();
  const { updatePost } = usePostsState();
  const { id } = useParams<{ id: string }>(); // パラメータから投稿IDを取得
  const [title, setTitle] = useState<string | undefined>("");
  const [content, setContent] = useState<string | undefined>("");
  const navigate = useNavigate();
  const apiBaseUrl = apiConfig.baseUrl;

  const handleTitleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(e.target.value);
    },
    []
  );

  const handleContentChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
    },
    []
  );

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      try {
        const res = await axios.get(`${apiBaseUrl}/api/v1/posts/${id}`);
        setTitle(res.data.title || "");
        setContent(res.data.content || "");
      } catch (e) {
        console.log(e);
      }
    };
    fetchPost();
  }, [apiBaseUrl, id]);

  const handleEdit = useCallback(async () => {
    if (!id) return;
    try {
      const res = await axios.put(`${apiBaseUrl}/api/v1/posts/${id}`, {
        title,
        content,
      });
      updatePost(res.data.id, res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setTitleValue("");
      setContentValue("");
      navigate("/posts");
    }
  }, [
    apiBaseUrl,
    content,
    id,
    navigate,
    setContentValue,
    setTitleValue,
    title,
    updatePost,
  ]);

  return {
    titleValue,
    handleEdit,
    handleContentChange,
    handleTitleChange,
    contentValue,
    title,
    content,
  };
};
export default usePostEdit;
