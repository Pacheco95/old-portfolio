import { Box } from "@chakra-ui/react";
import SwitchThemeButton from "./SwitchThemeButton";
import SwitchLangButton from "./SwitchLangButton";

const FloatingActions = () => {
  return (
    <Box pos="fixed" right={0} bottom={4} display="flex">
      <SwitchLangButton />
      <Box
        borderLeft={1}
        borderColor="primary"
        borderStyle="solid"
        color="red"
      ></Box>
      <SwitchThemeButton />
    </Box>
  );
};

export default FloatingActions;
