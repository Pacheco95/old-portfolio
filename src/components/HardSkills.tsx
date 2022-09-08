import { Box, BoxProps, Heading, Stack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import TwoColumnList from "./TwoColumnList";

const HardSkills = (props: BoxProps) => {
  const { t } = useTranslation("hardSkills");

  const hardSkills: string[] = t("skills", { returnObjects: true });

  return (
    <Box {...props}>
      <Stack>
        <Heading textAlign="center">Hard Skills</Heading>
        <TwoColumnList items={hardSkills} />
      </Stack>
    </Box>
  );
};

export default HardSkills;
