import NavigationBar from "./NavigationBar";
import Head from "next/head";

const PageLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>#marryingmartyr | {title}</title>
      </Head>
      <NavigationBar />
      {children}
    </>
  );
};

export default PageLayout;
