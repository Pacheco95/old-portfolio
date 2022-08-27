import { Flex, FlexProps } from "@chakra-ui/react";

const Container = (props: FlexProps) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    transition="all 0.15s ease-out"
    {...props}
  />
);
export default Container;
