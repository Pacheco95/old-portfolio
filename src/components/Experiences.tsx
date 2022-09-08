import {
  Box,
  BoxProps,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { useCallback } from "react";
import { format, formatDuration, intervalToDuration } from "date-fns";
import useDateFnsLocale from "../hooks/useDateFnsLocale";

interface Experience {
  title: string;
  url: string;
  since: string;
  until: string | null;
  role: {
    title: string;
    value: string[];
  };
  sections: {
    title: string;
    value: string[];
  }[];
}

const Experiences = (props: BoxProps) => {
  const { t, i18n } = useTranslation("experiences");

  const experiences: Experience[] = t("experiences", { returnObjects: true });
  const locale = useDateFnsLocale();

  const formatDateRange = useCallback(
    (sinceStr: Experience["since"], untilStr: Experience["until"]) => {
      const start = new Date(sinceStr);
      const now = new Date();
      const end = untilStr === null ? now : new Date(untilStr);
      const duration = intervalToDuration({ start, end });
      const durationStr = formatDuration(
        {
          years: duration.years,
          months: duration.months,
        },
        { delimiter: ", ", locale }
      );
      const range = [start, end]
        .map((date) =>
          date === now ? "até o momento" : format(date, "LLL/yyyy", { locale })
        )
        .join(" - ");
      return `${range} (${durationStr})`;
    },
    [i18n.language]
  );

  return (
    <Box {...props}>
      <Stack textAlign="left">
        <Heading textAlign="center">Experiências</Heading>
        {experiences.map((xp, i) => (
          <Box key={i} pt={8}>
            <VStack pb={4}>
              <Heading as="h3" size="lg">
                <Link href={xp.url} isExternal>
                  {xp.title} <ExternalLinkIcon fontSize="sm" />
                </Link>
              </Heading>
              <Text as="span" fontSize="xs">
                {formatDateRange(xp.since, xp.until)}
              </Text>
            </VStack>
            <OrderedList m={0} listStyleType="none" spacing={6}>
              <ListItem>
                <Heading as="h4" size="sm" mb={2}>
                  {xp.role.title}
                </Heading>
                <Text>{xp.role.value}</Text>
              </ListItem>

              {xp.sections.map((section, i) => (
                <ListItem key={i}>
                  <Heading as="h4" size="sm" mb={2}>
                    {section.title}
                  </Heading>
                  <UnorderedList spacing={2}>
                    {section.value.map((responsibility, i) => (
                      <ListItem key={i}>
                        <Text>{responsibility}</Text>
                      </ListItem>
                    ))}
                  </UnorderedList>
                </ListItem>
              ))}
            </OrderedList>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Experiences;
