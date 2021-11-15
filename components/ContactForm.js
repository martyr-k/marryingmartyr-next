import { Modal, Button } from "react-bootstrap";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRef } from "react";
import { toast } from "react-toastify";

import useInput from "hooks/useInput";
import styles from "./styles/ContactForm.module.css";

const ContactForm = ({ show, toggleModal }) => {
  const { value: name, handleChange: setName, reset: resetName } = useInput("");
  const {
    value: email,
    handleChange: setEmail,
    reset: resetEmail,
  } = useInput("");
  const {
    value: message,
    handleChange: setMessage,
    reset: resetMessage,
  } = useInput("");
  const captchaRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    captchaRef.current.execute();
  };

  const handleExpire = () =>
    toast.warn("hCaptcha token expired, please try again.");

  const handleError = (err) => toast.error(`hCaptcha error: ${err}`);

  const handleVerificationSuccess = async () => {
    const response = await axios.post("/api/contact", {
      name,
      email,
      message,
    });

    if (response.data.status === "failure") {
      return toast.error(
        "An error occured while sending your message, please try again later."
      );
    }

    resetName();
    resetEmail();
    resetMessage();
    toggleModal();
    captchaRef.current.resetCaptcha();

    return toast.success("Message sent!");
  };

  return (
    <Modal className={styles.contact} show={show} onHide={toggleModal} centered>
      <Modal.Header closeButton>
        <Modal.Title as="h5">Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              onChange={setName}
              required
              value={name}
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              onChange={setEmail}
              value={email}
              required
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              onChange={setMessage}
              value={message}
              rows="5"
              required
              placeholder="Message..."
            ></textarea>
          </div>
          <HCaptcha
            sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
            size="invisible"
            onVerify={handleVerificationSuccess}
            onError={handleError}
            onExpire={handleExpire}
            ref={captchaRef}
          />
          <input type="hidden" name="originPath" id="originPath" />
          <div className="d-flex justify-content-end contact-footer">
            <Button className="me-2" variant="secondary" onClick={toggleModal}>
              Close
            </Button>
            <Button variant="primary">Submit</Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactForm;
