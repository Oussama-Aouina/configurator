import { extendTheme, Heading } from "@chakra-ui/react";
import { Styles } from "@chakra-ui/theme-tools";
import { accordionTheme } from "./Accordion";
//color palette
const colors = {
  grayBrand: {
    50: "#E2E8F0",
    100: "#A0AEC0",
    200: "#828282",
    300: "#6F6F6F",
    400: "#ACACAC",
    500: "#718096",
    600: "#6E7079",
    700: "#858D9D",
  },
  greenBrand: {
    50: "#48BB78",
  },
  whiteBrand: {
    50: "#FDFDFD",
    100: "#F8F9FA",
    200: "#F0F0F0",
    300: "#ffffff",
    400: "#EAE3FF",
    500: "#E0E2E7",
    600: "#F9F9FC",
  },
  blueBrand: {
    100: "#153060",
    200: "rgba(58, 91, 255, 0.15)",
    300: "#3A5BFF",
  },
  purpleBrand: {
    50: "#764EF4",
    100: "#9D4FE5",
    200: "rgba(129, 92, 245, 0.11)",
    300: "rgba(91, 35, 181, 0.22)",
    400: "rgba(235, 222, 246, 1)",
    500: "rgba(91, 35, 181, 0.22)",
  },
  blackBrand: {
    100: "#2D3748",
    200: "rgba(75, 73, 73, 1)",
    300: "#070707",
  },
};

// fonts
const fonts = {
  body: "'Inter', sans-serif",
  heading: "'Inter', sans-serif",
  text: "'Inter', sans-serif",
};
// breakPoints for responsivness
const breakpoints = {
  sm: "480px",
  md: "768px",
  mdLg: "992px", // custom breakpoint between md and lg
  lg: "1400px",
  xl: "1620px",
  "2xl": "1800px",
};

// Global styles
const styles: Styles = {
  global: () => ({
    body: {
      bg: "#F8F9FA",
      WebkitTapHighlightColor: "transparent",
    },
    Text: {
      fontFamily: "'Inter', sans-serif",
    },
    Heading: {
      fontFamily: "'Inter', sans-serif",
    },
  }),
};

// Extend the theme with custom colors, fonts, and styles
const theme = extendTheme({
  colors,
  fonts,
  styles,
  breakpoints,
  components: {
    Text: {
      baseStyle: {
        color: "grayBrand.100",
        fontFamily: "body",
      },
      Accordion: accordionTheme,
    },
    Heading: {
      baseStyle: {
        color: "blackBrand.50",
        fontFamily: "body",
      },
    },
  },
});

export default theme;
