import usePost from "./hooks/usePost";
import PostPage from "./views/PostPage";

const PostContainer = () => {
  const postProps = usePost();
  return <PostPage {...postProps} />;
};
export default PostContainer;
