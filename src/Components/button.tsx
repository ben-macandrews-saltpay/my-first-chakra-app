import React, { ReactElement, } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'

type ButtonProps = {
    label: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ label }) => {
    return (
        <Button
            colorScheme='purple'
            padding='6px 20px 6px 20px'
            borderRadius={100}
            minWidth="100px"
        >{label}</Button>
    )
}

export default PrimaryButton;