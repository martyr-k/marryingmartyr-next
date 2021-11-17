import PageLayout from "components/PageLayout";
import LoadingSpinner from "components/LoadingSpinner";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";

const Livestream = () => {
  const { isLoading } = useAuthenticatedClient("/rsvp");

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <PageLayout title="Livestream" footer={false}>
      <div style={{ width: "100%", height: "calc(100vh - 66px)" }}>
        <iframe
          height="100%"
          width="100%"
          type="text/html"
          src="https://www.youtube.com/embed/HLOv0DS4aNQ"
          title="Victoria and Kelub's wedding livestream"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </PageLayout>
  );
};

export default Livestream;
