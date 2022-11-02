import { TypeAnimation } from "react-type-animation";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const sequence = [
  "Eu",
  100,
  "Eu sou",
  100,
  "Eu sou desenvolvedor",
  1000,
  "I'm",
  100,
  "I'm a",
  100,
  "I'm a developer",
  1000,
];

const Intro = () => {
  const { t } = useTranslation("intro");
  return (
    <Flex
      flex={1}
      direction="column"
      alignItems="start"
      width="100%"
      justifyContent="center"
      transition="all 0.15s ease-out"
    >
      <Text
        color="primary"
        fontSize="5xl"
        fontWeight={700}
        textTransform="uppercase"
      >
        Hello World
      </Text>
      <Text
        color="primary"
        fontSize="2xl"
        fontWeight={500}
        textTransform="uppercase"
      >
        <TypeAnimation
          speed={10}
          deletionSpeed={7}
          sequence={sequence}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
        />
      </Text>
      <Button
        textTransform="uppercase"
        _hover={{
          color: "whiteAlpha.200",
          borderColor: "whiteAlpha.200",
        }}
        _active={{}}
        borderWidth={2}
        color="primary"
        borderColor="primary"
        variant="outline"
        mt={8}
      >
        {t("wantToKnow")}
      </Button>
    </Flex>
  );
};

export default Intro;
