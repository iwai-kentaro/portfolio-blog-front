import { HStack, Spinner, Stack, Text, VStack } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Stack
      w="100%"
      h="100%"
      position={"fixed"}
      top={0}
      left={0}
      zIndex={100}
      background={"rgba(255, 255, 255, 0.8)"}
    >
      <HStack justifyContent="center" alignItems="center" w="100%" h="100%">
        <VStack color="teal.600">
          <Spinner color="colorPalette.600" size="xl" />
          <Text color="colorPalette.600">Loading...</Text>
        </VStack>
      </HStack>
    </Stack>
  );
};

export default Loading;
