import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { redirect } from 'react-router-dom';
import { Link, Input, InputGroup, InputLeftElement, Stack, Container, Heading, Box, Button, ButtonGroup } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

function LoginPage() {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);

      if (token) {
        return redirect('/profile');
      }

    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
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
          <Link href="/error">Log Out</Link>
        </Stack>
        <Heading color='white' mt="50px" mb='10px' fontSize='50px'>Log Into </Heading>
        <Heading color='white' mt="25px" mb='10px' fontSize='150px'>BootMate()</Heading>

        <Stack color='white' spacing={3}>
          <form onSubmit={handleFormSubmit}>
            <InputGroup>
              <InputLeftElement pointerEvents='none' />
              <Input placeholder="Email"
                name="email"
                type="email"
                id="email"
                onChange={handleChange} />
            </InputGroup>

            <InputGroup>
              <InputLeftElement pointerEvents='none' />
              <Input placeholder="Password"
                name="password"
                type="password"
                id="pwd"
                onChange={handleChange} />
            </InputGroup>
            <Box>
              <ButtonGroup gap='4'>
                <RouterLink to="/profile">
                  <Stack direction='column'>
                    <Box
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
                        <Button colorScheme='whiteAlpha'>Sign In</Button>
                      </ButtonGroup>
                    </Box>
                  </Stack>
                </RouterLink>
              </ButtonGroup>
            </Box>
          </form>
        </Stack>
      </Container>
    </Box>
  );
}


export default LoginPage;