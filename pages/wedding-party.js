import { Container } from "react-bootstrap";
import Image from "next/image";

import weddingParty from "lib/wedding-party";
import WeddingPartyCard from "components/WeddingPartyCard";
import PageLayout from "components/PageLayout";
import LoadingSpinner from "components/LoadingSpinner";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import styles from "styles/WeddingParty.module.css";

const WeddingParty = () => {
  const { isLoading } = useAuthenticatedClient("/rsvp");

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <PageLayout title="Wedding Party">
      <div className={`${styles.main} py-4`}>
        <Container fluid>
          <h1 className="display-2 text-center">Our Wedding Party</h1>
          <h5 className={`${styles.introduction} text-center mt-4 mb-5`}>
            Click on an image to learn more about the people who will be walking
            down the aisle with us!
          </h5>
          <div className="row">
            <div className="col-lg-6 pe-lg-4 bride mb-5 mb-xxl-0">
              <div className={styles.sectionImage}>
                <Image
                  src="/imgs/bride.jpg"
                  layout="fill"
                  alt="Kelub and Victoria"
                  objectFit="cover"
                  objectPosition="top"
                  priority
                />
              </div>
              <h2 className="text-center mb-5">Bride&apos;s Squad</h2>
              <div className="row mb-5">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <WeddingPartyCard
                    {...weddingParty[0]}
                    position="left"
                    objectPosition="center 20%"
                    priority
                  />
                </div>
                <div className="col-xxl-6">
                  <WeddingPartyCard
                    {...weddingParty[1]}
                    position="right"
                    objectPosition="top"
                    priority
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12">
                  <WeddingPartyCard
                    {...weddingParty[2]}
                    position="center"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <WeddingPartyCard
                    {...weddingParty[3]}
                    position="left"
                    objectPosition="top"
                  />
                </div>
                <div className="col-xxl-6">
                  <WeddingPartyCard
                    {...weddingParty[4]}
                    position="right"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <WeddingPartyCard
                    {...weddingParty[5]}
                    position="left"
                    objectPosition="top"
                    bottom
                  />
                </div>
                <div className="col-xxl-6">
                  <WeddingPartyCard
                    {...weddingParty[6]}
                    position="right"
                    objectPosition="top"
                    bottom
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-4 groom">
              <div className={styles.sectionImage}>
                <Image
                  src="/imgs/groom.jpg"
                  layout="fill"
                  alt="Kelub and Victoria"
                  objectFit="cover"
                  objectPosition="top"
                  priority
                />
              </div>
              <h2 className="text-center mb-5">Groom&apos;s Boys</h2>
              <div className="row mb-5">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <WeddingPartyCard
                    {...weddingParty[7]}
                    position="left"
                    objectPosition="top"
                    priority
                  />
                </div>
                <div className="col-xxl-6">
                  <WeddingPartyCard
                    {...weddingParty[8]}
                    position="right"
                    objectPosition="center 20%"
                    priority
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12">
                  <WeddingPartyCard
                    {...weddingParty[9]}
                    position="center"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <WeddingPartyCard
                    {...weddingParty[10]}
                    position="left"
                    objectPosition="top"
                  />
                </div>
                <div className="col-xxl-6">
                  <WeddingPartyCard
                    {...weddingParty[11]}
                    position="right"
                    objectPosition="center 40%"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <WeddingPartyCard
                    {...weddingParty[12]}
                    position="left"
                    objectPosition="top"
                    bottom
                  />
                </div>
                <div className="col-xxl-6">
                  <WeddingPartyCard
                    {...weddingParty[13]}
                    position="right"
                    objectPosition="top"
                    bottom
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </PageLayout>
  );
};

export async function getStaticProps() {
  return {
    props: { weddingParty },
  };
}

export default WeddingParty;
