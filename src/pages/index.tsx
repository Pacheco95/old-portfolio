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

const sections = [
  AboutMe,
  Educational,
  HardSkills,
  SoftSkills,
  TechTools,
  Experiences,
];

const Home: NextPage = () => (
  <>
    <Head>
      <title>Portfolio | Michael Pacheco</title>
    </Head>
    <Container as="main" height="100vh">
      {sections.map((Section, i) => (
        <Section
          bg={cn({ "purple.600": i % 2 })}
          key={Section.name}
          as="section"
          width="100%"
          p={4}
        />
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
