import {
  Box,
  BoxProps,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { SiLinkedin, SiGmail } from "react-icons/si";
import { Icon } from "@chakra-ui/icons";

const contacts = [
  {
    icon: SiLinkedin,
    url: "https://www.linkedin.com/in/michaelpacheco95",
    description: "michaelpacheco95",
  },
  {
    icon: SiGmail,
    url: "mailto:mdpgd95@gmail.com",
    description: "mdpgd95@gmail.com",
  },
];

const Contact = (props: BoxProps) => {
  const { t } = useTranslation("contact");

  return (
    <Box {...props}>
      <Stack textAlign="left">
        <Heading textAlign="center" mb={4}>
          {t("title")}
        </Heading>
        <HStack justify="space-around">
          {contacts.map(({ icon, url, description }) => (
            <Link key={url} href={url} isExternal>
              <Flex direction="column" alignItems="center" gap={2}>
                <Icon as={icon} boxSize={12} />
                {description}
              </Flex>
            </Link>
          ))}
        </HStack>
      </Stack>
    </Box>
  );
};

export default Contact;
