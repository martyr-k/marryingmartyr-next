import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

import { useAuthentication } from "contexts/AuthenticationContext";
import useInput from "hooks/useInput";
import styles from "./styles/EditInviteeForm.module.css";

const EditInviteeForm = ({
  identifier,
  alias,
  email,
  attendance,
  show,
  toggleShow,
  mutateInvitees,
}) => {
  const { token } = useAuthentication();
  const [attendanceForm, handleAttendance, setAttendance] = useInput("");
  const [aliasForm, handleAlias, setAlias] = useInput("");
  const [emailForm, handleEmail, setEmail] = useInput("");

  const initializeModal = () => {
    setAlias(alias);
    setAttendance(attendance);
    setEmail(email);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      await axios.patch(
        "/api/invitees",
        {
          aliasForm,
          attendanceForm,
          emailForm,
          identifier,
        },
        {
          headers: {
            authorization: token.value,
          },
        }
      );

      toast.success("Invitee updated successfully!");
      mutateInvitees((data) => {
        const invitees = data.data.invitees.map((invitee) => {
          if (invitee.identifier === identifier) {
            return {
              ...invitee,
              alias: aliasForm,
              attendance: attendanceForm,
              email: emailForm,
            };
          }
          return invitee;
        });

        return {
          ...data,
          data: {
            invitees,
            totalConfirmedAttendees: data.data.totalConfirmedAttendees,
          },
        };
      }, false);
      toggleShow();
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
      console.log(error);
    }
  };

  return (
    <Modal
      className={styles.modal}
      show={show}
      centered
      onHide={toggleShow}
      backdrop="static"
      keyboard={false}
      onEnter={initializeModal}
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
