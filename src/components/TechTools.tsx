import {
  Box,
  BoxProps,
  Flex,
  Heading,
  List,
  Stack,
  Tag,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

interface Tool {
  category: string;
  values: string[];
}

const TechTools = (props: BoxProps) => {
  const { t } = useTranslation("techTools");

  const tools: Tool[] = t("tools", { returnObjects: true });

  return (
    <Box {...props}>
      <Stack>
        <Heading textAlign="center" mb={4}>
          {t("title")}
        </Heading>
        <List textAlign="left" spacing={8}>
          {tools.map(({ category, values }) => (
            <Stack key={category}>
              <Heading as="h3" size="md">
                {category}
              </Heading>
              <Flex wrap="wrap" gap={2}>
                {values.map((value) => (
                  <Tag
                    size="lg"
                    key={`${category}_${value}`}
                    variant="solid"
                    colorScheme="blackAlpha"
                  >
                    {value}
                  </Tag>
                ))}
              </Flex>
            </Stack>
          ))}
        </List>
      </Stack>
    </Box>
  );
};

export default TechTools;
