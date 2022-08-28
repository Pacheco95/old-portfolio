import {
  Box,
  BoxProps,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { CheckIcon } from "@chakra-ui/icons";

const HardSkills = (props: BoxProps) => {
  const { t } = useTranslation("hardSkills");

  const hardSkills: string[] = t("skills", { returnObjects: true });

  return (
    <Box {...props}>
      <Stack>
        <Heading textAlign="center">Hard Skills</Heading>
        <List>
          {hardSkills.map((skill, i) => (
            <ListItem key={i}>
              <ListIcon as={CheckIcon} />
              {skill}
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
};

export default HardSkills;
