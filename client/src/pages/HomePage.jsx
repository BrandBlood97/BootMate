import { Container, Heading, Box, Stack, InputGroup, InputLeftElement, Flex, Link, ButtonGroup, Button } from "@chakra-ui/react";
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
    <Box
    style={{
        backgroundImage: "url('https://img.pikbest.com/wp/202344/black-brick-wall-texture-high-resolution-panoramic-view-of-a-dark-textured-with-blocks-stone_9925054.jpg!w700wp')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', 
    }}
>
    <Container
        maxW='lg'
        centerContent
    >
        <Stack direction="row" spacing='75px' fontSize='25px' p={4} color="white">
            <Link href="/home">Home</Link>
            <Link href="/profile">Sign In </Link>
            <Link href="/settings">Log Out</Link>
        </Stack>
        <Heading color='white' mt="px" mb='10px' fontSize='50px'>Welcome To </Heading>
        <Heading color='white' mt="25px" mb='10px' fontSize='150px'>BootMate()</Heading>
        
        <Stack color='white' spacing={3}>
        <form onSubmit={handleFormSubmit}>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
            </InputLeftElement>
            <Flex direction="column" justify="center" align="center">
            <RouterLink to="/Signup">
                        <Stack direction='column'>
                            <   Box
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                width='100%'
                                py={12}
                                bgPosition='center'
                                bgRepeat='no-repeat'
                                mb={2}
                            >
                                <ButtonGroup gap='3'>
                                    <Button colorScheme='whiteAlpha'>Sign Up</Button>
                                </ButtonGroup>
                            </Box>
                        </Stack>
                    </RouterLink>
              <RouterLink to="/Login">
                        <Stack direction='column'>
                            <   Box
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                width='100%'
                                py={12}
                                bgPosition='center'
                                bgRepeat='no-repeat'
                                mb={2}
                            >
                                <ButtonGroup gap='3'>
                                    <Button colorScheme='whiteAlpha'>Log In</Button>
                                </ButtonGroup>
                            </Box>
                        </Stack>
                    </RouterLink>
            </Flex>
          </InputGroup>
        </form>
      </Stack>
    </Container>
</Box>
  );
}