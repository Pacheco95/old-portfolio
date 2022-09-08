import { Box, BoxProps, Heading, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

const calculateAge = (birthDate: Date) => {
  const diff = new Date(Date.now() - birthDate.getTime());
  return Math.abs(diff.getUTCFullYear() - 1970);
};

const AboutMe = (props: BoxProps) => {
  const { t } = useTranslation("about");

  const age = calculateAge(new Date(1995, 1, 9));

  return (
    <Box {...props}>
      <Stack textAlign="left">
        <Heading textAlign="center">{t("title")}</Heading>
        <Text textAlign="justify">{t("resume", { age })}</Text>
        <Text textAlign="justify">{t("description")}</Text>
      </Stack>
    </Box>
  );
};

export default AboutMe;
