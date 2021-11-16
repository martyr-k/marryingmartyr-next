import { Modal } from "react-bootstrap";
import Image from "next/image";

import styles from "./styles/PaymentSuccess.module.css";

const PaymentSuccess = ({ successModal, handleClose }) => {
  return (
    <Modal
      show={successModal}
      onHide={() => handleClose()}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header className={styles.header} closeButton>
        <Modal.Title>Thank you!</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.body}>
        <p>
          From the bottom of their hearts we (Victoria & Kelub) express
          gratitude towards you for your contribution.
        </p>
        <p>
          We are excited to share our special day with you and look forward to
          seeing you on October 3, 2021!
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/imgs/stripe-payment-success.jpg"
            alt="kelub and victoria together"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentSuccess;
