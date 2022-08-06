type ColorsType = {
    brand: {
      neutral: {
        900: string;
        800: string;
        700: string;
        500: string;
        400: string;
        300: string;
        100: string;
        50: string;
      };
      primary: {
        "500": string;
        "900": string;
        "700": string;
        background: string;
      };
      secondary: {
        "300": string;
      };
      pure: {
        white: string;
      };
      alerts: {
        critical: {
          dark: string;
          main: string;
          stroke: string;
          background: string;
        };
        success: {
          stroke: string;
          background: string;
          dark: string;
        };
        warning: {
          dark: string;
          stroke: string;
          background: string;
        };
      };
    };
  };

export const Colors: ColorsType = {
    brand: {
        neutral: {
            900: "#212121",
            800: "#424242",
            700: "#616161",
            500: "#9E9E9E",
            400: "#BDBDBD",
            300: "#E0E0E0",
            100: "#F5F5F5",
            50: "#000000",
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
};