import { extendTheme } from '@chakra-ui/react';
// import { Colors } from "./colors"

const theme = extendTheme(
    {
        colors: {
            brand: {
                neutral: {
                    900: "#212121",
                    800: "#424242",
                    700: "#616161",
                    500: "#9E9E9E",
                    400: "#BDBDBD",
                    300: "#E0E0E0",
                    100: "#F5F5F5",
                    50: "#FCFCFC"
                },
                primary: {
                    "500": "#7560E2",
                    background: "#F2F0FF",
                    "900": "#3A3071",
                    "700": "#5848A9",
                },
                secondary: {
                    "300": "#90DAE4",
                },
                pure: {
                    white: "#FFFFFF",
                },
                alerts: {
                    critical: {
                        dark: "#D32F2F",
                        main: "#F44336",
                        stroke: "#F3BFBE",
                        background: "#FEEFEE",
                    },
                    success: {
                        stroke: "#C2DEC3",
                        background: "#F0F8F0",
                        dark: "#388E3C",
                    },
                    warning: {
                        dark: "#F57C00",
                        stroke: "#FDD8AF",
                        background: "#FFF6E9",
                    },
                },
            }
        },
        fonts: {
            body: "'Noto Sans', sans-serif",
            heading: "'Noto Sans', sans-serif",
        },
        fontWeights: {
            regular: "400",
            semibold: "600",
        },
        radii: {
            md: "8px",
        },
        shadows: {
            saltmedium: "0px 8px 20px rgba(97, 97, 97, 0.08), 0px 4px 10px rgba(97, 97, 97, 0.04), 0px 2px 6px rgba(97, 97, 97, 0.02), 0px 1px 2px rgba(97, 97, 97, 0.01)"
        }
    }
)

export default theme;