import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  brand: {
    BgPrimary: "#F0ECE5",
    BgSecondary: "#B6BBC4",
    TextPrimary: "#0F2167",
    TextSecondary: "#22668D",
  },
};

const components = {
  Drawer: {
    baseStyle: {
      dialog: {
        bg: "#F0ECE5", // Change this to your preferred background color
        color: "#0F2167", // Change the text color if needed
      },
    },
  },
  // Button: {
  //   baseStyle: {
  //     // Default styles for all buttons
  //     fontWeight: "bold", // Example: set font weight
  //   },
  //   variants: {
  //     solid: {
  //       bg: "#F0ECE5", // Default background color for solid variant
  //       color: "#0F2167", // Default text color for solid variant
        // _hover: {
        //   bg: "#B6BBC4", // Background color on hover
        // },
  //     },
  //   },
  //   defaultProps: {
  //     variant: "solid", // Set the default variant to "solid"
  //   },
  // },
};

const theme = extendTheme({ config, colors, components });

export default theme;
