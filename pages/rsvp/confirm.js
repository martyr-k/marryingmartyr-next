import axios from "axios";
import Router from "next/router";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { toast } from "react-toastify";

import useInput from "hooks/useInput";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import { useAuthentication } from "contexts/AuthenticationContext";
import LoadingSpinner from "components/LoadingSpinner";
import PageLayout from "components/PageLayout";
import styles from "styles/RSVP.module.css";

const RSVP = () => {
  const { code, isLoading } = useAuthenticatedClient("/rsvp");
  const { token } = useAuthentication();
  const [song, handleSongChange] = useInput("");
  const [artist, handleArtistChange] = useInput("");
  const [checkedState, setCheckedState] = useState(
    new Array(code?.invitedGuests.length).fill(false)
  );
  const [confirmedGuests, setConfirmedGuests] = useState([]);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      await axios.post(
        "/api/rsvp",
        {
          artist,
          song,
          confirmedGuests,
        },
        {
          headers: {
            authorization: token.value,
          },
        }
      );

      toast.success("RSVP Confirmed!");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
      console.log(error);
    }
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const selectedGuests = updatedCheckedState
      .map((val, index) => {
        if (val) {
          return code.invitedGuests[index];
        }
      })
      .filter((guest) => guest);

    setConfirmedGuests(selectedGuests);
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <PageLayout>
      <div className={styles.main}>
        <div className={styles.imageWrapper}>
          <Image
            src="/imgs/rsvp.jpg"
            layout="fill"
            alt="rsvp image"
            objectFit="cover"
            objectPosition="center 35%"
            priority
          />
        </div>

        <h1 className="display-3 text-center pt-5">
          We can&apos;t wait for you to celebrate with us!
        </h1>

        <form className="mt-5 w-75 mx-auto" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <h2 className="lead mb-3 text-center text-md-start display-4">
                Please confirm who will be attending:
              </h2>
              <div>
                {code.invitedGuests.map((guest, index) => {
                  return (
                    <div className="input-group mb-2" key={index}>
                      <div className="input-group-text">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name={guest}
                          value={guest}
                          checked={checkedState[index]}
                          onChange={() => handleOnChange(index)}
                          aria-label="Checkbox for confirming guest attendance"
                        />
                      </div>
                      <input
                        className="form-control"
                        disabled
                        value={guest}
                        aria-label="Guest name"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <p className="lead mb-3">What song would make you dance?</p>
              <div className="row g-1 mb-2">
                <label className="col-lg-2" htmlFor="song">
                  Song:
                </label>
                <div className="col-lg-10">
                  <input
                    className="form-control"
                    type="text"
                    id="song"
                    name="song"
                    value={song}
                    onChange={handleSongChange}
                  />
                </div>
              </div>
              <div className="row g-1 mb-2">
                <label className="col-lg-2" htmlFor="artist">
                  Artist:
                </label>
                <div className="col-lg-10">
                  <input
                    className="form-control"
                    type="text"
                    id="artist"
                    name="artist"
                    value={artist}
                    onChange={handleArtistChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <Button
            className="mx-auto d-block mt-3"
            variant="secondary"
            type="submit"
            size="lg"
          >
            Submit
          </Button>
        </form>
      </div>
    </PageLayout>
  );
};

export default RSVP;

// https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
