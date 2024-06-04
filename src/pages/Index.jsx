import { Container, VStack, Box, Text, Avatar, Image, HStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="black" color="white">
      <VStack spacing={4} align="stretch" width="100%">
        <HStack spacing={4} align="center">
          <Avatar name="Niklas Vatn" src="https://via.placeholder.com/150" />
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold">Niklas Vatn</Text>
            <Text>hello</Text>
          </VStack>
        </HStack>
        <HStack spacing={4} align="center">
          <Avatar name="GPT Engineer" src="https://via.placeholder.com/150" />
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold">GPT Engineer</Text>
            <Text>Hello! How can I assist you today?</Text>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;