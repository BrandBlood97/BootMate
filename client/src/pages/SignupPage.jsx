import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_STUDENT } from '../utils/mutations';
import { Link as RouterLink } from 'react-router-dom';
import { ButtonGroup, Input, InputGroup, InputLeftElement, RadioGroup, Radio, Stack, Container, Heading, Text, Box, Link, Button } from "@chakra-ui/react";


function SignupPage() {
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '', openEmploy: '' });
  const [addStudent] = useMutation(ADD_STUDENT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
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
        <Heading color='white' mt="50px" mb='10px' fontSize='50px'>Sign In To </Heading>
        <Heading color='white' mt="25px" mb='10px' fontSize='150px'>BootMate()</Heading>

        <Stack color='white' spacing={3}>
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
                <RouterLink to="/profile">
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
                                    <Button colorScheme='whiteAlpha'>Sign In</Button>
                                </ButtonGroup>
                            </Box>
                        </Stack>
                    </RouterLink>
                </ButtonGroup>
              </Box>
            </Container>
          </form>
        </Stack>
      </Container>
    </Box>
  );
}


export default SignupPage;