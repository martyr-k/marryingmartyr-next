import { Container } from "react-bootstrap";
import { useState } from "react";

import useInput from "hooks/useInput";
import AdditionalGuest from "components/AdditionalGuest";
import PageLayout from "components/PageLayout";
import LoadingSpinner from "components/LoadingSpinner";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import styles from "styles/RegisterInvitees.module.css";

const RegisterInvitees = () => {
  const { isLoading } = useAuthenticatedClient("/rsvp");
  const [inputState, setInputState] = useState([""]);
  const { value: attendance, handleChange: setAttendance } =
    useInput("in-person");
  const { value: inviteCode, handleChange: setInviteCode } = useInput("");
  const { value: alias, handleChange: setAlias } = useInput("");

  const incrementGuest = (position) => {
    if (!position) {
      setInputState([...inputState, ""]);
    } else {
      setInputState([
        ...inputState.slice(0, position),
        ...inputState.slice(position + 1, inputState.length),
      ]);
    }
  };

  const handleInputChange = (event, position) => {
    const updatedInputState = inputState.map((value, i) => {
      if (position === i) {
        return event.target.value;
      }
      return value;
    });

    setInputState(updatedInputState);
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <PageLayout title="Register Invitees">
      <div className={styles.main}>
        <Container className="py-5" fluid>
          <form className={styles.form}>
            <h1>Register Invitees</h1>
            <div className="mb-3">
              <label htmlFor="inviteCode" className="form-label">
                Invite Code:
              </label>
              <input
                className="form-control"
                type="text"
                value={inviteCode}
                onChange={setInviteCode}
                id="inviteCode"
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
                value={alias}
                onChange={setAlias}
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
                value={attendance}
                onChange={setAttendance}
              >
                <option value="in-person">In-Person</option>
                <option value="virtual">Virtual</option>
              </select>
            </div>
            <label className="form-label d-block" htmlFor="guests">
              Guests:
            </label>
            {inputState.map((value, i) => {
              return (
                <AdditionalGuest
                  key={i}
                  value={value}
                  position={i}
                  incrementGuest={incrementGuest}
                  handleInputChange={handleInputChange}
                />
              );
            })}
            <button
              className="btn btn-burgundy w-50 mx-auto d-block"
              type="submit"
            >
              Submit
            </button>
          </form>
        </Container>
      </div>
    </PageLayout>
  );
};

export default RegisterInvitees;
