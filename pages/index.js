import PageLayout from "components/PageLayout";
import Image from "next/dist/client/image";

import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <PageLayout title="Home">
      <div className={styles.main}>
        <div className={styles.imageWrapper}>
          <Image
            src="/imgs/home-image-3.jpg"
            layout="fill"
            alt="home image 1"
            objectFit="cover"
            priority
          />
          <Image
            src="/imgs/home-image-2.jpg"
            layout="fill"
            alt="home image 2"
            objectFit="cover"
            priority
          />
          <Image
            src="/imgs/home-image-1.jpg"
            layout="fill"
            alt="home image 2"
            objectFit="cover"
            objectPosition="center 35%"
            priority
          />
        </div>
        <div className={styles.date}>
          <h2 className="display-2">October 3, 2021</h2>
          <h2 className="display-2">1:30 PM</h2>
        </div>
        <div className={styles.name}>
          <h2 className="display-1">Kelub &</h2>
          <h2 className="display-1">Victoria</h2>
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
