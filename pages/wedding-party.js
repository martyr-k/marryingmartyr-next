import { Container } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";

import weddingParty from "lib/wedding-party";
import WeddingPartyCard from "components/WeddingPartyCard";
import PageLayout from "components/PageLayout";
import LoadingSpinner from "components/LoadingSpinner";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import styles from "styles/WeddingParty.module.css";

const WeddingParty = ({ weddingParty: party }) => {
  const { isLoading } = useAuthenticatedClient("/rsvp");
  const [flippedArr, setFlippedArr] = useState(new Array(14).fill(false));

  const handleFlip = (index) => {
    const updatedFlipArr = new Array(14).fill(false);
    if (index >= 0) {
      updatedFlipArr[index] = true;
    }
    setFlippedArr(updatedFlipArr);
  };

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
                    {...party[0]}
                    flip={flippedArr[0]}
                    index={0}
                    handleFlip={handleFlip}
                    position="left"
                    objectPosition="center 20%"
                    priority
                  />
                </div>
                <div className="col-xxl-6">
                  <WeddingPartyCard
                    {...party[1]}
                    flip={flippedArr[1]}
                    index={1}
                    handleFlip={handleFlip}
                    position="right"
                    objectPosition="top"
                    priority
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12">
                  <WeddingPartyCard
                    {...party[2]}
                    flip={flippedArr[2]}
                    index={2}
                    handleFlip={handleFlip}
                    position="center"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <WeddingPartyCard
                    {...party[3]}
                    flip={flippedArr[3]}
                    index={3}
                    handleFlip={handleFlip}
                    position="left"
                    objectPosition="top"
                  />
                </div>
                <div className="col-xxl-6">
                  <WeddingPartyCard
                    {...party[4]}
                    flip={flippedArr[4]}
                    index={4}
                    handleFlip={handleFlip}
                    position="right"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <WeddingPartyCard
                    {...party[5]}
                    flip={flippedArr[5]}
                    index={5}
                    handleFlip={handleFlip}
                    position="left"
                    objectPosition="top"
                    bottom
                  />
                </div>
                <div className="col-xxl-6">
                  <WeddingPartyCard
                    {...party[6]}
                    flip={flippedArr[6]}
                    index={6}
                    handleFlip={handleFlip}
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
                    {...party[7]}
                    flip={flippedArr[7]}
                    index={7}
                    handleFlip={handleFlip}
                    position="left"
                    objectPosition="top"
                    priority
                  />
                </div>
                <div className="col-xxl-6">
                  <WeddingPartyCard
                    {...party[8]}
                    flip={flippedArr[8]}
                    index={8}
                    handleFlip={handleFlip}
                    position="right"
                    objectPosition="center 20%"
                    priority
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12">
                  <WeddingPartyCard
                    {...party[9]}
                    flip={flippedArr[9]}
                    index={9}
                    handleFlip={handleFlip}
                    position="center"
                    objectPosition="top"
                  />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <WeddingPartyCard
                    {...party[10]}
                    flip={flippedArr[10]}
                    index={10}
                    handleFlip={handleFlip}
                    position="left"
                    objectPosition="top"
                  />
                </div>
                <div className="col-xxl-6">
                  <WeddingPartyCard
                    {...party[11]}
                    flip={flippedArr[11]}
                    index={11}
                    handleFlip={handleFlip}
                    position="right"
                    objectPosition="center 40%"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-6 mb-5 mb-xxl-0">
                  <WeddingPartyCard
                    {...party[12]}
                    flip={flippedArr[12]}
                    index={12}
                    handleFlip={handleFlip}
                    position="left"
                    objectPosition="top"
                    bottom
                  />
                </div>
                <div className="col-xxl-6">
                  <WeddingPartyCard
                    {...party[13]}
                    flip={flippedArr[13]}
                    index={13}
                    handleFlip={handleFlip}
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
