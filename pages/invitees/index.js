import useSWR from "swr";
import axios from "axios";
import { Container } from "react-bootstrap";
import { useState } from "react";

import PageLayout from "components/PageLayout";
import LoadingSpinner from "components/LoadingSpinner";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import { useAuthentication } from "contexts/AuthenticationContext";
import InviteeView from "components/InviteeView";
import EditInviteeForm from "components/EditInviteeForm";
import useToggle from "hooks/useToggle";
import styles from "styles/ViewInvitees.module.css";

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
  const { data, mutate } = useSWR(token && ["/api/invitees", token], fetcher);
  const [invitee, setInvitee] = useState("");
  const [show, toggleShow] = useToggle(false);

  const openModal = (inviteeObj) => {
    setInvitee(inviteeObj);
    toggleShow();
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
            <tbody>
              {data?.data?.invitees.map((invitee) => {
                return (
                  <InviteeView
                    {...invitee}
                    key={invitee._id}
                    openModal={openModal}
                  />
                );
              })}
            </tbody>
          </table>
        </Container>
      </div>
      <EditInviteeForm
        {...invitee}
        show={show}
        toggleShow={toggleShow}
        mutateInvitees={mutate}
      />
    </PageLayout>
  );
};

export default ViewInvitees;
