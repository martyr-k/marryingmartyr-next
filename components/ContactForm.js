import { Modal, Button } from "react-bootstrap";

import styles from "./styles/ContactForm.module.css";

const ContactForm = ({ show, toggleModal }) => {
  const handleSubmit = () => {};

  return (
    <Modal className={styles.contact} show={show} onHide={toggleModal} centered>
      <Modal.Header closeButton>
        <Modal.Title as="h5">Contact Us</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form id="contact-form" action="/contact" method="post">
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              name="message"
              id="message"
              rows="5"
              required
              placeholder="Message..."
            ></textarea>
          </div>
          <input type="hidden" name="originPath" id="originPath" />
          <div className="d-flex justify-content-end contact-footer">
            <Button className="me-2" variant="secondary" onClick={toggleModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactForm;
