import useCreatePost from "./hooks/useCreatePost";
import CreatePostPage from "./views/CreatePostPage";

const CreatePostContainer = () => {
  const createPostProps = useCreatePost();
  return <CreatePostPage {...createPostProps} />;
};
export default CreatePostContainer;
