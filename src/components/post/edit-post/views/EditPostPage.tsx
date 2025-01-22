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

const PostEditPage = (prop: {
  titleValue: string | undefined;
  contentValue: string | undefined;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleEdit: () => void;
  title: string | undefined;
  content: string | undefined;
}) => {
  const {
    // titleValue,
    // contentValue,
    handleContentChange,
    handleEdit,
    handleTitleChange,
    title,
    content,
  } = prop;
  return (
    <Box w={"100%"} p={4} flex={1} mx={"auto"}>
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
        <Heading textAlign={"center"}>ブログ記事更新</Heading>
        <Stack w={"100%"} maxW={"600px"} p={4} flex={1} mx={"auto"}>
          <Input
            placeholder="タイトル"
            onChange={handleTitleChange}
            value={title}
          />
          <Textarea
            placeholder="本文"
            onChange={handleContentChange}
            value={content}
          />
          <Button colorScheme="blue" onClick={handleEdit}>
            更新
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
export default PostEditPage;
