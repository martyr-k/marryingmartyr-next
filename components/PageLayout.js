import { Container } from "react-bootstrap";
import NavigationBar from "./NavigationBar";
import Head from "next/head";

const PageLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>#marryingmartyr | {title}</title>
      </Head>
      <NavigationBar />
      <Container fluid>{children}</Container>
    </>
  );
};

export default PageLayout;
