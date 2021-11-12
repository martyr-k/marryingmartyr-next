import { useState, useEffect } from "react";
import PageLayout from "components/PageLayout";
import Image from "next/dist/client/image";

import homeImage1 from "public/imgs/home-image-3.jpg";
import homeImage2 from "public/imgs/home-image-2.jpg";
import homeImage3 from "public/imgs/home-image-1.jpg";
import styles from "styles/Home.module.css";

const Home = () => {
  const [remaining, setRemaining] = useState();
  const countdownDate = "December 12, 2021 13:56:00";

  useEffect(() => {
    const calcDate = () => {
      const currentDate = new Date().getTime();
      const targetDate = new Date(countdownDate).getTime();
      const difference = targetDate - currentDate;

      if (difference <= 0) {
        setRemaining("Expired");
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    };

    const updater = setInterval(calcDate, 1000);

    return () => clearInterval(updater);
  }, []);

  return (
    <PageLayout title="Home">
      <div className={styles.main}>
        <Image src={homeImage1} alt="home image 1" objectFit="cover" priority />
        <Image src={homeImage2} alt="home image 2" objectFit="cover" priority />
        <Image
          src={homeImage3}
          alt="home image 2"
          objectFit="cover"
          objectPosition="center 35%"
          priority
        />

        <div className={styles.date}>
          <h2 className="display-2">October 3, 2021</h2>
          <h2 className="display-2">1:30 PM</h2>
          {remaining && <div className="display-4">{remaining}</div>}
        </div>
        <div className={styles.name}>
          <h2 className="display-1">Kelub &</h2>
          <h2 className="display-1">Victoria</h2>
        </div>
        {remaining && (
          <div className={`${styles.countdown} display-4`}>{remaining}</div>
        )}
      </div>
    </PageLayout>
  );
};

export default Home;
