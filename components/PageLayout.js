import Head from "next/head";

import Footer from "./Footer";
import NavigationBar from "./NavigationBar";

const PageLayout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>#marryingmartyr | {title}</title>
      </Head>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
