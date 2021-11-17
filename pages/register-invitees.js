import { Container } from "react-bootstrap";

import PageLayout from "components/PageLayout";
import LoadingSpinner from "components/LoadingSpinner";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import styles from "styles/RegisterInvitees.module.css";

const RegisterInvitees = () => {
  const { isLoading } = useAuthenticatedClient("/rsvp");

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
              <select name="attendance" id="attendance" className="form-select">
                <option value="in-person" selected>
                  In-Person
                </option>
                <option value="virtual">Virtual</option>
              </select>
            </div>
            <label className="form-label d-block" htmlFor="guests">
              Guests:
            </label>
            <div className="input-group mb-3">
              <i className="bi bi-person-plus input-group-text"></i>
              <input
                className="form-control guest"
                type="text"
                name="guest"
                placeholder="Joe Smith"
                autoComplete="off"
                required
              />
            </div>
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
