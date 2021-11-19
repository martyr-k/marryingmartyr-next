import useSWR from "swr";
import axios from "axios";
import { Container } from "react-bootstrap";

import PageLayout from "components/PageLayout";
import LoadingSpinner from "components/LoadingSpinner";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import styles from "styles/ViewInvitees.module.css";
import { useAuthentication } from "contexts/AuthenticationContext";

const fetcher = (url, token) => {
  return axios
    .get(url, {
      headers: {
        authorization: token.value,
      },
    })
    .then((response) => {
      return response.data;
    });
};

const ViewInvitees = () => {
  const { isLoading } = useAuthenticatedClient("/rsvp", "admin");
  const { token } = useAuthentication();
  const { data } = useSWR(token && ["/api/invitees", token], fetcher);

  const openModal = () => {
    // send api request
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <PageLayout title="View Invitees">
      <div className={styles.main}>
        <Container className="py-4">
          <div className="d-flex justify-content-between mb-5">
            <div>
              <h1 className="display-2">Wedding Invitees</h1>
            </div>
            <h4>{data?.data?.totalConfirmedAttendees} Confirmed Attendees</h4>
          </div>

          <table className={styles.table}>
            {data?.data?.invitees.map((invitee) => {
              return (
                <tr className={styles.tableRow} key={invitee._id}>
                  <td>
                    <span
                      className="cursor-pointer text-primary"
                      onClick={handleClick}
                    >
                      {invitee.alias}
                    </span>
                    {invitee.email && <span> ✅</span>}
                    {invitee.rsvp && <span> 💒</span>}
                    <p className="mt-1 mb-0">Invited Guests:</p>
                    {invitee.invitedGuests.map((guest, index) => {
                      return (
                        <p className="mb-0" key={index}>
                          {guest}
                        </p>
                      );
                    })}
                  </td>
                  <td className="text-end">
                    {invitee.attendance}
                    {invitee.attendance === "in-person" && (
                      <>
                        <p className="mt-1 mb-0">Confirmed Guests:</p>
                        {invitee.confirmedGuests.map((guest, index) => {
                          return (
                            <p className="mb-0" key={index}>
                              {guest}
                            </p>
                          );
                        })}
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </table>
        </Container>
      </div>
    </PageLayout>
  );
};

export default ViewInvitees;
