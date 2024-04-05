import { Button, ButtonGroup, Container, Heading, Text, Box, Stack, InputGroup, InputLeftElement, Input, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

export default function LoginPage() {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  const handleChange = (event) => {
    // Handle input change
  };

  return (
    <Container maxW='lg' centerContent>
      <Heading mt="50px" mb='20px' fontSize='6xl'>BootMate()</Heading>
      <Stack spacing={3}>
  <form onSubmit={handleFormSubmit}>
    <InputGroup>
      <InputLeftElement pointerEvents='none'>
      </InputLeftElement>
      <Flex direction="column" justify="space-between">
        <RouterLink to="/Signup">
          <Box boxShadow='dark-lg' p='6' rounded='md' bg='white' mb='4'>
            <Text fontSize='2xl'>Sign Up</Text>
          </Box>
        </RouterLink>
        <RouterLink to="/Login">
          <Box boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            <Text fontSize='2xl'>Login</Text>
          </Box>
        </RouterLink>
      </Flex>
    </InputGroup>
  </form>
</Stack>
</Container>
  );
}