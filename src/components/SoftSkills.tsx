import { Box, BoxProps, Heading, Stack } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import TwoColumnList from "./TwoColumnList";

const SoftSkills = (props: BoxProps) => {
  const { t } = useTranslation("softSkills");

  const softSkills: string[] = t("skills", { returnObjects: true });

  return (
    <Box {...props}>
      <Stack>
        <Heading textAlign="center">Soft Skills</Heading>
        <TwoColumnList items={softSkills} />
      </Stack>
    </Box>
  );
};

export default SoftSkills;
