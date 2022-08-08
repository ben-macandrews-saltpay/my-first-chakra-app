import React from "react";
import { Box } from '@chakra-ui/react'

type ButtonProps = {
    label: string;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ label }) => {
    return (
        <Box
            as='button'
            height='auto'
            minWidth='120px'
            px={2}
            py={3}
            borderRadius={100}
            transition='all 0.2s cubic-bezier(0.08,.52,.52,1)'
            textStyle="small-semibold"
            bg="brand.primary.500"
            color="brand.pure.white">
            {label}</Box>
    )
}

export const SecondaryButton: React.FC<ButtonProps> = ({ label }) => {
    return (
        <Box
            as='button'
            height='auto'
            minWidth='120px'
            px={2}
            py={3}
            borderRadius={100}
            transition='all 0.2s cubic-bezier(0.08,.52,.52,1)'
            textStyle="small-semibold"
            // ISSUE!!!
            border='1.5px'
            borderColor="brand.primary.500"
            color="brand.pure.white">
            {label}
        </Box>
    )
}