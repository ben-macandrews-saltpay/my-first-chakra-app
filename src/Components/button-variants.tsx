import { background, color } from '@chakra-ui/react';
import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Button: ComponentStyleConfig = {

    // The styles all button have in common
    baseStyle: {
        // fontWeight: 'semibold',
        // textTransform: 'uppercase',
        borderRadius: '100', // <-- border radius is same for all variants and sizes
    },
    // Two sizes: sm and md
    sizes: {
        sm: {
            textStyle: 'small-semibold',
            px: 3, // <-- px is short for paddingLeft and paddingRight
            py: 2, // <-- py is short for paddingTop and paddingBottom
            border: '1.5px solid'
        },
        md: {
            textStyle: 'body-semibold',
            px: 4, // <-- these values are tokens from the design system
            py: 3, // <-- these values are tokens from the design system
            border: '2px solid'
        },
        lg: {
            textStyle: 'large-semibold',
            px: 6,
            py: 4,
            border: '3px solid'
        }
    },
    // Two variants: outline and solid
    variants: {
        primary: {
            bg: 'brand.primary.500',
            color: 'brand.pure.white',
            border: 'none',
            _hover: {
                bg: 'brand.primary.700',
            },
            _active: {
                bg: 'brand.primary.900',
            },
            _disabled: {
                bg: 'brand.neutral.100',
                color: 'brand.neutral.500'
            },
        },

        secondary: {
            
            borderColor: 'brand.primary.500',
            color: 'brand.primary.500',
            _hover: {
                bg: 'brand.primary.background',
            },
            _active: {
                bg: 'brand.primary.background',
                borderColor: 'brand.primary.900',
                color: 'brand.primary.900'
            },
            _disabled: {
                bg: 'brand.neutral.100',
                color: 'brand.neutral.500',
                borderColor: 'brand.neutral.500'
            },
        },

        outline: {
            border: '2px solid',
            borderColor: 'purple.500',
            color: 'purple.500',
        },
        solid: {
            bg: 'purple.500',
            color: 'white',
        },
    },
    // The default size and variant values
    defaultProps: {
        size: 'md',
        variant: 'outline',
    },


}

export default Button;