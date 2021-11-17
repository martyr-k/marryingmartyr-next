import Image from "next/image";
import { CSSTransition } from "react-transition-group";

// import useToggle from "hooks/useToggle";
import styles from "./styles/WeddingPartyCard.module.css";

const WeddingPartyCard = ({
  name,
  source,
  description,
  position,
  priority,
  objectPosition,
  bottom,
  flip,
  handleFlip,
  index,
}) => {
  //   const [flip, toggleFlip] = useToggle(false);
  const handleClick = () => {
    console.log(index);
    handleFlip(index);
  };

  const handleClose = () => {
    handleFlip();
  };

  return (
    <div
      className={`${bottom && position === "left" && "ms-xxl-5"} ${
        bottom && position === "right" && "me-xxl-5"
      }`}
    >
      {!flip && (
        <div className={styles.front} onClick={handleClick}>
          <div
            className={`${styles.image} ${
              position === "right" && "ms-xxl-auto"
            } ${position === "center" && "mx-auto"}`}
          >
            <Image
              src={source}
              layout="fill"
              alt={name}
              objectFit="cover"
              objectPosition={objectPosition}
              priority={priority}
            />
          </div>
          <h2
            className={`mt-2 text-center ${
              position === "right" && "text-xxl-end"
            }  ${position === "left" && "text-xxl-start"}`}
          >
            {name}
          </h2>
        </div>
      )}
      <CSSTransition in={flip} timeout={300} classNames="intro" unmountOnExit>
        <div className={styles.back}>
          <p
            classNames={position === "center" && "w-75 mx-auto"}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          <i
            className="bi bi-x-circle cursor-pointer"
            onClick={handleClose}
          ></i>
        </div>
      </CSSTransition>
    </div>
  );
};

export default WeddingPartyCard;
