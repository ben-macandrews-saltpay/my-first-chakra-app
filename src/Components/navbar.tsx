import React from 'react';
import {
    Flex,
    Box,
    Heading,
    Spacer,
    ButtonGroup,
    Button
} from '@chakra-ui/react'
import theme from "../theme/theme"


const Navbar = () => {
    return (
        <Flex minWidth='max-content' h="48px" alignItems='center' gap='2'>
            <Box p='2' textStyle="heading-small-semibold" color='brand.neutral.800'>
                {/* <Heading size='md'>SaltConnect Layout Project</Heading> */}
                SaltConnect Layout Component
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