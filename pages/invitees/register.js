import { Container } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import useInput from "hooks/useInput";
import AdditionalGuest from "components/AdditionalGuest";
import PageLayout from "components/PageLayout";
import LoadingSpinner from "components/LoadingSpinner";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import { useAuthentication } from "contexts/AuthenticationContext";
import styles from "styles/RegisterInvitees.module.css";

const RegisterInvitees = () => {
  const { isLoading } = useAuthenticatedClient("/rsvp", "admin");
  const { token } = useAuthentication();
  const [inputState, setInputState] = useState([""]);
  const [attendance, handleAttendance, resetAttendance] = useInput("in-person");
  const [inviteCode, handleInviteCode, resetInviteCode] = useInput("");
  const [alias, handleAlias, resetAlias] = useInput("");

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

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      await axios.post(
        "/api/invitees",
        {
          alias,
          attendance,
          inviteCode,
          invitedGuests: inputState,
        },
        {
          headers: {
            authorization: token.value,
          },
        }
      );

      toast.success("Invitee created successfully!");
      resetAlias();
      resetAttendance();
      resetInviteCode();
      setInputState([""]);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
      console.log(error);
    }
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <PageLayout title="Register Invitees">
      <div className={styles.main}>
        <Container className="py-5" fluid>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h1>Register Invitees</h1>
            <div className="mb-3">
              <label htmlFor="inviteCode" className="form-label">
                Invite Code:
              </label>
              <input
                className="form-control"
                type="text"
                value={inviteCode}
                onChange={handleInviteCode}
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
                value={attendance}
                onChange={handleAttendance}
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
