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

const SoftSkills = (props: BoxProps) => {
  const { t } = useTranslation("softSkills");

  const softSkills: string[] = t("skills", { returnObjects: true });

  return (
    <Box {...props}>
      <Stack>
        <Heading textAlign="center">Soft Skills</Heading>
        <List textAlign="left">
          {softSkills.map((skill, i) => (
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

export default SoftSkills;
