import usePostEdit from "./hooks/useEditPost";
import PostEditPage from "./views/EditPostPage";

const PostEditContainer = () => {
  const postEditProps = usePostEdit();

  return <PostEditPage {...postEditProps} />;
};
export default PostEditContainer;
