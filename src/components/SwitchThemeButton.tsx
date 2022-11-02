import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const SwitchThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      fontSize={24}
      icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      color="primary"
      variant="link"
      size="lg"
      onClick={toggleColorMode}
      aria-label={
        colorMode === "light" ? "switch to dark mode" : "switch to light mode"
      }
    ></IconButton>
  );
};

export default SwitchThemeButton;
