import { extendTheme } from '@chakra-ui/react';
import { TYPE_SCALES } from "./typography";
// import { Colors } from "./colors"

const theme = extendTheme(
    {
        typography: {"heading-medium-semibold": {
            fontStyle: "Normal",
            fontSize: "32px",
            fontWeight: 600,
            lineHeight: "32px",
          },
          "heading-small-semibold": {
            fontStyle: "Normal",
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "44px",
          },
          "heading-small-regular": {
            fontStyle: "Normal",
            fontSize: "24px",
            fontWeight: 400,
            lineHeight: "32px",
          },
          "body-regular": {
            fontStyle: "Normal",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
          },
          "body-semibold": {
            fontStyle: "Normal",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
          },
          "body-extrabold": {
            fontStyle: "Normal",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
          },
          "large-semibold": {
            fontStyle: "Normal",
            fontSize: "20px",
            fontWeight: 600,
            lineHeight: "28px",
          },
        
          "small-regular": {
            fontStyle: "Normal",
            fontSize: "13px",
            fontWeight: 400,
            lineHeight: "16px",
          },
          "small-semibold": {
            fontStyle: "Normal",
            fontSize: "13px",
            fontWeight: 600,
            lineHeight: "16px",
          },
        },
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
                    900: "#3A3071",
                    700: "#5848A9",
                    500: "#7560E2",
                    background: "#F2F0FF",
                },
                secondary: {
                    300: "#90DAE4",
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