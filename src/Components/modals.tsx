import React from 'react';
import { Box } from '@chakra-ui/react'
import theme from '../theme/theme'


export default function CriticalActionModal() {
    return (
        <Box
            border='1px'
            borderColor='red'
            minH={100}
            maxW={100}
            borderRadius="md"
            boxShadow={'shadows.saltmedium'}
        >
        </Box>
    )
}

