import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostsContainer from "../components/post/posts-page/PostsContainer";
import PostContainer from "../components/post/post-page/PostContainer";
import CreatePostContainer from "../components/post/create-post/CreatePostContainer";
import EditPostContainer from "../components/post/edit-post/EditPostContainer";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsContainer />} />
        <Route path="/posts" element={<PostsContainer />} />
        <Route path="/posts/:id" element={<PostContainer />} />
        <Route path="/posts/new" element={<CreatePostContainer />} />
        <Route path="/posts/:id/edit" element={<EditPostContainer />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
