import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import { redirect } from 'react-router-dom';
import { ButtonGroup, Button, Input, InputGroup, InputLeftElement, Stack, Container, Heading, Box, } from "@chakra-ui/react";

function LoginPage(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

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
    <Container maxW='lg'>
      <Heading mt="50px" mb='20px' fontSize='6xl'>BootMate()</Heading>
      <Heading mt="50px" mb='20px' fontSize='3xl'>Login</Heading>
      <Stack spacing={3}>
        <form onSubmit={handleFormSubmit}>
        <InputGroup>
    <InputLeftElement pointerEvents='none'>
    </InputLeftElement>
    <Input  placeholder="Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}/>
  </InputGroup>
  <InputGroup>
    <InputLeftElement pointerEvents='none'>
    </InputLeftElement>
    <Input  placeholder="Password"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}/>
          <Box>
            <ButtonGroup gap='4'>
              <Button type="submit" colorScheme='blackAlpha'>Enter</Button>
            </ButtonGroup>
          </Box>
        </InputGroup>
        </form>
      </Stack>
    </Container>
  )
}


export default LoginPage;