import { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_STUDENT } from '../utils/mutations';
// import { redirect } from "react-router-dom";
import { ButtonGroup, Button, Input, InputGroup, InputLeftElement, RadioGroup, Radio, Stack, Container, Heading, Text, Box, } from "@chakra-ui/react";
import { Link as RouterLink } from 'react-router-dom';

function SignupPage() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addStudent] = useMutation(ADD_STUDENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try{
        const mutationResponse = await addStudent({
            variables: {
            email: formState.email,
            password: formState.password,
            firstName: formState.firstName,
            lastName: formState.lastName,
            openEmploy: formState.openEmploy === "Yes" ? true : false,
            },
        });
        const token = mutationResponse.data.addStudent.token;
        Auth.login(token);
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
    <Container maxW='lg' centerContent>
    <Heading mt="50px" mb='20px' fontSize='6xl'>BootMate()</Heading>
    <Heading mt="50px" mb='20px' fontSize='3xl'>Sign Up</Heading>
    <Stack spacing={3}>
      <form onSubmit={handleFormSubmit}>
      <InputGroup mb="5">
        <InputLeftElement pointerEvents='none'>
        </InputLeftElement>
        <Input placeholder="First"
          name="firstName"
          type="firstName"
          id="firstName"
          onChange={handleChange} />
      </InputGroup>
      <InputGroup mb="5">
        <InputLeftElement pointerEvents='none'>
        </InputLeftElement>
        <Input placeholder="Last"
          name="lastName"
          type="lastName"
          id="lastName"
          onChange={handleChange} />
      </InputGroup>
      <InputGroup mb="5">
        <InputLeftElement pointerEvents='none'>
        </InputLeftElement>
        <Input placeholder="youremail@test.com"
          name="email"
          type="email"
          id="email"
          onChange={handleChange} />
      </InputGroup>
      <InputGroup mb="5">
        <InputLeftElement pointerEvents='none'>
        </InputLeftElement>
        <Input placeholder="******"
          name="password"
          type="password"
          id="pwd"
          onChange={handleChange} />
      </InputGroup>
      <InputGroup mb="5">
        <InputLeftElement pointerEvents='none'>
        </InputLeftElement>
        <Input placeholder="Select an Option"
          name="openEmploy"
          type="list"
          list="options"
          id="work"
          onChange={handleChange} />
      </InputGroup>
    <Container maxW='lg' centerContent>
      <Box>
        <Text fontSize='2xl' p='15'>Seeking Employment</Text>
        <RadioGroup defaultValue='1'>
          <Stack spacing={3} direction='row'>
            <Radio value='1'>Yes</Radio>
            <Radio value='2'>No</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box>
        <ButtonGroup gap='4'>
          <RouterLink to="/Profile">
            <Button colorScheme='blackAlpha'>Enter</Button>
          </RouterLink>
        </ButtonGroup>
      </Box>
    </Container>
    </form>
    </Stack>
  </Container>
    );
  }
  

export default SignupPage;