import { Box, Heading, Stack, HStack, Link, Button } from "@chakra-ui/react";
import Post from "../../../../models/post";
import Loading from "../../../../utility/Loading";

const PostsPage = (props: {
  posts: Post[] | null;
  handleDelete: (id: number) => void;
  loading: boolean;
}) => {
  const { posts, handleDelete, loading } = props;

  if (!posts) {
    return <p>Loading...</p>;
  }
  return (
    <Box>
      {loading && <Loading />}
      <Heading as="h1" size="3xl" p={4} textAlign="center">
        React App
      </Heading>
      <HStack>
        <Link
          textAlign={"center"}
          p={4}
          justifyContent={"center"}
          background={"gray.100"}
          w={200}
          mx={"auto"}
          borderRadius={"lg"}
          href="/posts/new"
        >
          新規投稿ページ
        </Link>
      </HStack>
      <Stack p={20} flex={1} alignItems={"center"}>
        {posts.map((post: Post) => (
          <Stack
            key={post.id}
            w={"100%"}
            maxW={"600px"}
            p={4}
            borderWidth="2px"
            borderRadius="lg"
          >
            <HStack justifyContent="space-between">
              <Link href={`/posts/${post.id}`}>
                <Heading as="h2" size="lg">
                  {post.title}
                </Heading>
                <p>{post.content}</p>
              </Link>
              <Stack>
                <Button
                  backgroundColor={"blue"}
                  color={"white"}
                  as={Link}
                  href={`/posts/${post.id}/edit`}
                >
                  EDIT
                </Button>
                <Button
                  backgroundColor={"red"}
                  color={"white"}
                  onClick={() => handleDelete(post.id)}
                >
                  DELETE
                </Button>
              </Stack>
            </HStack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};
export default PostsPage;
