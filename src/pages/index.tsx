import Container from "../components/Container";
import { GetStaticProps, type NextPage } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import FloatingActions from "../components/FloatingActions";
import Intro from "../components/Intro";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Michael Pacheco</title>
      </Head>
      <Container as="main" height="100vh" p={6}>
        <Intro />
        <FloatingActions />
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale)),
  },
});

export default Home;
