import {
  Box,
  BoxProps,
  Heading,
  HStack,
  Link,
  List,
  ListItem,
  Stack,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface EducationalBackground {
  description: string;
  url: string;
}

const Educational = (props: BoxProps) => {
  const { t } = useTranslation("educational");

  const background: EducationalBackground[] = t("values", {
    returnObjects: true,
  });

  return (
    <Box {...props}>
      <Stack textAlign="left">
        <Heading textAlign="center">Formação acadêmica</Heading>
        <List spacing={4}>
          {background.map(({ description, url }, i) => (
            <ListItem key={i}>
              <HStack>
                <Link href={url} isExternal>
                  {description}
                  <ExternalLinkIcon fontSize="sm" ml={2} />
                </Link>
              </HStack>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
};

export default Educational;
