import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Link,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import Loading from "../../../../utility/Loading";

const CreatePostPage = (props: {
  titleValue: string | undefined;
  contentValue: string | undefined;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}) => {
  const {
    titleValue,
    contentValue,
    handleTitleChange,
    handleContentChange,
    handleSubmit,
    loading,
  } = props;
  return (
    <Box w={"100%"} p={4} flex={1} mx={"auto"}>
      {loading && <Loading />}
      <Box
        w={"100%"}
        p={4}
        flex={1}
        mx={"auto"}
        maxW={"600px"}
        borderWidth="2px"
        borderRadius="lg"
        boxShadow="lg"
      >
        <Heading textAlign={"center"}>ブログ記事新規登録</Heading>
        <Stack w={"100%"} maxW={"600px"} p={4} flex={1} mx={"auto"}>
          <Input
            placeholder="タイトル"
            onChange={handleTitleChange}
            value={titleValue}
          />
          <Textarea
            placeholder="本文"
            onChange={handleContentChange}
            value={contentValue}
          />
          <Button colorScheme="blue" onClick={handleSubmit}>
            登録
          </Button>
        </Stack>
      </Box>
      <HStack p={4} flex={1} mx={"auto"} justifyContent={"center"} mt={10}>
        <Box>
          <Link
            p={4}
            justifyContent={"center"}
            background={"gray.100"}
            w={200}
            mx={"auto"}
            borderRadius={"lg"}
            href="/posts"
          >
            投稿一覧へ戻る
          </Link>
        </Box>
      </HStack>
    </Box>
  );
};
export default CreatePostPage;
