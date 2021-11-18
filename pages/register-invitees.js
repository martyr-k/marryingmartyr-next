import { Container } from "react-bootstrap";
import { useState } from "react";

import PageLayout from "components/PageLayout";
import LoadingSpinner from "components/LoadingSpinner";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import styles from "styles/RegisterInvitees.module.css";

const RegisterInvitees = () => {
  const { isLoading } = useAuthenticatedClient("/rsvp");
  const [additionalGuests, setAdditionalGuests] = useState(0);

  const incrementGuest = (add) => {
    if (add) {
      setAdditionalGuests((prev) => prev + 1);
    } else {
      setAdditionalGuests((prev) => prev - 1);
    }
  };

  const renderAdditionalGuests = () => {
    const guests = [];

    for (let i = 0; i < additionalGuests; i++) {
      guests.push(
        <div className="input-group mb-3" key={i}>
          <i
            className={`bi bi-person-x input-group-text ${styles.removeInput}`}
            onClick={() => incrementGuest(false)}
          ></i>
          <input
            className="form-control guest"
            type="text"
            name="guest"
            placeholder="Joe Smith"
            autoComplete="off"
            required
          />
        </div>
      );
    }

    return guests;
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
                name="inviteCode"
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
                name="alias"
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
                value="in-person"
              >
                <option value="in-person">In-Person</option>
                <option value="virtual">Virtual</option>
              </select>
            </div>
            <label className="form-label d-block" htmlFor="guests">
              Guests:
            </label>
            <div className="input-group mb-3">
              <i
                className={`bi bi-person-plus input-group-text ${styles.addInput}`}
                onClick={() => incrementGuest(true)}
              ></i>
              <input
                className="form-control guest"
                type="text"
                name="guest"
                placeholder="Joe Smith"
                autoComplete="off"
                required
              />
            </div>
            {renderAdditionalGuests()}
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
