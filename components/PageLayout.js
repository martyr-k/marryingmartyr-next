import Head from "next/head";
import PropTypes from "prop-types";

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

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageLayout;
