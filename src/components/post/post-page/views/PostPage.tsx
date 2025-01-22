import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Post from "../../../../models/post";
import moment from "moment";

const PostPage = (props: { post: Post | undefined }) => {
  const { post } = props;

  if (!post) {
    return <p>Loading...</p>;
  }
  return (
    <Box>
      <Heading as="h2" size="xl" p={4} textAlign="center">
        {post.title}
      </Heading>
      <Stack
        p={20}
        flex={1}
        maxW={"600px"}
        mx={"auto"}
        borderWidth="2px"
        borderRadius="lg"
      >
        <Text fontSize="sm">
          投稿日: {moment(post.created_at).format("YYYY年MM月DD日 HH:mm")}
        </Text>
        <Text fontSize="sm">
          更新日: {moment(post.updated_at).format("YYYY年MM月DD日 HH:mm")}
        </Text>
        <Text fontSize="2xl">{post.content}</Text>
      </Stack>
    </Box>
  );
};
export default PostPage;
