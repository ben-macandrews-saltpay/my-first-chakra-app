import React from 'react';
import {
    Flex,
    Box,
    Heading,
    Spacer,
    ButtonGroup,
    Button
} from '@chakra-ui/react'
import mainLogo from './logos/salt-connect-logo.png';

const Navbar = () => {
    return (
        <Flex minWidth='max-content' h="48px" alignItems='center' gap='2'>
            <img width='120px' src={mainLogo}/>
            <Box p='2' textStyle="large-semibold" color='brand.neutral.800'>
                {/* <Heading size='md'>SaltConnect Layout Project</Heading> */}
                Layout Component
            </Box>
            <Spacer />
            <ButtonGroup gap='2'>
                <Button variant='primary' size='sm'>Git Hub</Button>
                <Button variant='secondary' size='sm'>SaltConnect</Button>
            </ButtonGroup>
        </Flex>
    )
}

export default Navbar;