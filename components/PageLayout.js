import Head from "next/head";
import PropTypes from "prop-types";

import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

const PageLayout = ({ children, title, footer = true }) => {
  return (
    <>
      <Head>
        <title>#marryingmartyr | {title}</title>
      </Head>
      <NavigationBar />
      {children}
      {footer && <Footer />}
    </>
  );
};

PageLayout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageLayout;
