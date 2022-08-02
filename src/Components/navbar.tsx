import React from 'react';
import {
    Flex,
    Box,
    Heading,
    Spacer,
    ButtonGroup,
    Button
} from '@chakra-ui/react'


const Navbar = () => {
    return (
        <Flex minWidth='max-content' h="48px" alignItems='center' gap='2'>
            <Box p='2'>
                <Heading size='md'>SaltConnect Layout Project</Heading>
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button colorScheme='teal'>Sign Up</Button>
                <Button colorScheme='teal'>Log in</Button>
            </ButtonGroup>
        </Flex>
    )
}

export default Navbar;