import usePosts from "./hooks/usePosts";
import PostsPage from "./views/PostsPage";

const PostsContainer = () => {
  const postsProps = usePosts();
  return <PostsPage {...postsProps} />;
};

export default PostsContainer;
