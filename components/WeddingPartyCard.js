import Image from "next/image";
import { CSSTransition } from "react-transition-group";

import useToggle from "hooks/useToggle";
import styles from "./styles/WeddingPartyCard.module.css";

const WeddingPartyCard = ({
  source,
  description,
  name,
  position,
  priority,
  objectPosition,
}) => {
  const [flip, toggleFlip] = useToggle(false);

  const handleClick = () => {};

  return (
    <div>
      {!flip && (
        <div className={styles.front} onClick={toggleFlip}>
          <div className={styles.image}>
            <Image
              src="/imgs/wave.jpg"
              layout="fill"
              alt="Waveney Edwards"
              objectFit="cover"
              objectPosition="center 20%"
              priority
            />
          </div>
          <h2 className="mt-2 text-center text-xxl-start">Waveney Edwards</h2>
        </div>
      )}
      <CSSTransition in={flip} timeout={300} classNames="intro" unmountOnExit>
        <div className={styles.back}>
          <p>
            So Victoria and I have been best friends since elementary school. We
            met when her father became the pastor of our church. It has been a
            long road ever since. We fight like sisters but we also love like
            twins. My favourite memory of us has to be when we almost burnt down
            our church. It was during a fasting service (so we shouldn’t have
            even been eating in the first place 😂) but we were so hungry and we
            knew there were patties in the kitchen and there was no way we could
            resist food knowing it was in reach. Now I don’t know how we managed
            to burn simple patties but it takes each of our half brains to make
            a full one so that should tell you something. I just remember we
            were terrified the smoke alarm would go off and everyone would be
            able to smell our sin 🤣
          </p>
          <i className="bi bi-x-circle cursor-pointer" onClick={toggleFlip}></i>
        </div>
      </CSSTransition>
    </div>
  );
};

export default WeddingPartyCard;
