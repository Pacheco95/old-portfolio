import Container from "../components/Container";
import { type NextPage, GetStaticProps } from "next";
import Head from "next/head";
import AboutMe from "../components/AboutMe";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HardSkills from "../components/HardSkills";
import SoftSkills from "../components/SoftSkills";
import TechTools from "../components/TechTools";
import cn from "classnames";
import Experiences from "../components/Experiences";
import Educational from "../components/Educational";
import Contact from "../components/Contact";
import { Box } from "@chakra-ui/react";

const sections = [
  AboutMe,
  Educational,
  HardSkills,
  SoftSkills,
  TechTools,
  Experiences,
  Contact,
];

const Home: NextPage = () => (
  <>
    <Head>
      <title>Portfolio | Michael Pacheco</title>
    </Head>
    <Container as="main" height="100vh">
      {sections.map((Section, i) => (
        <Box key={Section.name} bg={cn({ "purple.600": i % 2 })} width="100%">
          <Section as="section" p={4} maxW="800px" m="auto" />
        </Box>
      ))}
    </Container>
  </>
);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default Home;
