import PageLayout from "components/PageLayout";
import LoadingSpinner from "components/LoadingSpinner";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import styles from "styles/ViewInvitees.module.css";

const ViewInvitees = () => {
  const { isLoading } = useAuthenticatedClient("/rsvp", "admin");

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <PageLayout>
      <div className={styles.main}></div>
    </PageLayout>
  );
};

export default ViewInvitees;
