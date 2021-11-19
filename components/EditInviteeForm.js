import { Modal, Button } from "react-bootstrap";
import { useEffect } from "react";

import useInput from "hooks/useInput";
import styles from "./styles/EditInviteeForm.module.css";

const EditInviteeForm = ({
  identifier,
  alias,
  email,
  attendance,
  show,
  toggleShow,
}) => {
  const {
    value: attendanceForm,
    handleChange: handleAttendance,
    setValue: setAttendance,
  } = useInput(attendance);
  const {
    value: aliasForm,
    handleChange: handleAlias,
    setValue: setAlias,
  } = useInput(alias);
  const {
    value: emailForm,
    handleChange: handleEmail,
    setValue: setEmail,
  } = useInput(email);

  useEffect(() => {
    setAttendance(attendance);
  }, [attendance, setAttendance]);

  useEffect(() => {
    setAlias(alias);
  }, [alias, setAlias]);

  useEffect(() => {
    setEmail(email);
  }, [email, setEmail]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Modal
      className={styles.modal}
      show={show}
      centered
      onHide={toggleShow}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Register Invitees</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="identifier" className="form-label">
              Identifier:
            </label>
            <input
              className="form-control"
              type="text"
              value={identifier}
              id="identifier"
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              className="form-control"
              type="text"
              value={emailForm}
              onChange={handleEmail}
              id="email"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="alias" className="form-label">
              Alias:
            </label>
            <input
              className="form-control"
              type="text"
              value={aliasForm}
              onChange={handleAlias}
              id="alias"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="attendance">
              Attendance Type:
            </label>
            <select
              name="attendance"
              id="attendance"
              className="form-select"
              value={attendanceForm}
              onChange={handleAttendance}
            >
              <option value="in-person">In-Person</option>
              <option value="virtual">Virtual</option>
            </select>
          </div>
          <div className="d-flex justify-content-end contact-footer">
            <Button className="me-2" variant="secondary" onClick={toggleShow}>
              Close
            </Button>
            <button type="submit" className="btn btn-burgundy">
              Submit
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditInviteeForm;
