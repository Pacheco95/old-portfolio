import {
  extendTheme,
  type ThemeConfig,
  type ThemeOverride,
  type Colors,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: "dark",
};

const override: ThemeOverride = {
  fonts: {
    body: `'Roboto', sans-serif`,
    heading: `'Roboto', sans-serif`,
  },
};

const colors: Colors = {
  primary: "#188009",
  secondary: "#23B80D",
  blackAlpha: {
    50: "#888888",
    100: "#777777",
    200: "#666666",
    300: "#555555",
    400: "#444444",
    500: "#333333",
    600: "#222222",
    700: "#111111",
    800: "#111111",
    900: "#111111",
  },
  whiteAlpha: {
    50: "#999999",
    100: "#AAAAAA",
    200: "#BBBBBB",
    300: "#CCCCCC",
    400: "#DDDDDD",
    500: "#EEEEEE",
    600: "#FAFAFA",
    700: "#FFFFFF",
    800: "#FFFFFF",
    900: "#FFFFFF",
  },
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("whiteAlpha.900", "blackAlpha.900")(props),
    },
  }),
};

export default extendTheme({
  config,
  colors,
  ...override,
  styles,
});
