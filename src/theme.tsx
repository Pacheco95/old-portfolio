import {
  extendTheme,
  type ThemeConfig,
  type ThemeOverride,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: "dark",
};

const override: ThemeOverride = {
  fonts: {
    body: `'Open Sans', sans-serif`,
    heading: `'Open Sans', sans-serif`,
  },
};

export default extendTheme({
  config,
  ...override,
});
