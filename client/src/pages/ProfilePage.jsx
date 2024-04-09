import { Container, Heading, Stack, Box, Button, ButtonGroup, Flex, Link} from "@chakra-ui/react";

import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const UserContext = React.createContext();

export default function ProfilePage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "firstName") setFirstName(value);
        if (name === "lastName") setLastName(value);
        if (name === "email") setEmail(value);
    };

    return (
        <Box
        style={{
            backgroundImage: "url('https://img.pikbest.com/wp/202344/black-brick-wall-texture-high-resolution-panoramic-view-of-a-dark-textured-with-blocks-stone_9925054.jpg!w700wp')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh', // This makes sure the Box takes up at least the full height of the viewport
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
            <Heading color='white' mt="75px" mb='20px' fontSize='150px'>BootMate()</Heading>
            <Heading color='white' mt="25px" mb='20px' fontSize='50px'>Profile</Heading>
            <Stack color='white' spacing={3}>
                <form onSubmit={handleFormSubmit}>
                    <div id="profile-info">
                        <h2>First Name: {firstName}</h2>
                        <h2>Last Name: {lastName}</h2>
                        <h2>Email: {email}</h2>
                        <label htmlFor="work">Looking For Work:</label>
                        <input
                            name="work"
                            type="radio"
                            id="work"
                            onChange={handleChange}
                        />
                        <label htmlFor="collab">Looking For Collaboration:</label>
                        <input
                            name="collab"
                            type="radio"
                            id="collab"
                            onChange={handleChange}
                        />
                    </div>
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
                                <ButtonGroup gap='4'>
                                    <Button colorScheme='whiteAlpha'>Search Results</Button>
                                </ButtonGroup>
                            </Box>
                        </Stack>
                    </RouterLink>
                </form>
            </Stack>
        </Container>
    </Box>
    );
}
