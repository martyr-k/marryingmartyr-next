import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import rsvpImage from "public/imgs/rsvp.jpg";
import useInput from "hooks/useInput";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import { useAuthentication } from "contexts/AuthenticationContext";
import LoadingSpinner from "components/LoadingSpinner";
import PageLayout from "components/PageLayout";
import styles from "styles/RSVP.module.css";

const EditRSVP = () => {
  const { code, isLoading } = useAuthenticatedClient("/rsvp");
  const { token } = useAuthentication();
  const [song, handleSongChange, setSongValue] = useInput(
    code?.song?.split("- ")[1] || ""
  );
  const [artist, handleArtistChange, setArtistValue] = useInput(
    code?.song?.split(" -")[0] || ""
  );
  const [checkedState, setCheckedState] = useState(
    new Array(code?.invitedGuests.length).fill(false)
  );
  const [confirmedGuests, setConfirmedGuests] = useState([]);

  useEffect(() => {
    setSongValue(code?.song?.split("- ")[1] || "");
    setArtistValue(code?.song?.split(" -")[0] || "");
  }, [code?.song, setSongValue, setArtistValue, code]);

  useEffect(() => {
    if (code) {
      const updatedCheckedState = code.invitedGuests.map((guest) => {
        if (code.confirmedGuests.includes(guest)) {
          return true;
        }
        return false;
      });

      setCheckedState(updatedCheckedState);
      setConfirmedGuests(updateSelectedGuests(code, updatedCheckedState));
    }
  }, [code?.invitedGuests, code?.confirmedGuests, code]);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      await axios.patch(
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

      toast.success("RSVP Updated!");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
      console.log(error);
    }
  };

  const updateSelectedGuests = (code, checkedState) => {
    return checkedState
      .map((val, index) => {
        if (val) {
          return code.invitedGuests[index];
        }
      })
      .filter((guest) => guest);
  };

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    setConfirmedGuests(updateSelectedGuests(code, updatedCheckedState));
  };

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <PageLayout title="Edit RSVP">
      <div className={`${styles.main} py-5`}>
        <Image
          src={rsvpImage}
          alt="rsvp image"
          objectFit="cover"
          objectPosition="center 35%"
          priority
        />

        <h1 className="display-3 text-center">
          We can&apos;t wait for you to celebrate with us!
        </h1>

        {code.attendance === "in-person" && (
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
              className="mx-auto d-block mt-3 btn-burgundy"
              type="submit"
              size="lg"
            >
              Submit
            </Button>
          </form>
        )}

        {code.attendance === "virtual" && (
          <div className="mt-5 w-75 text-center mx-auto">
            <h2>Reservation Confirmed!</h2>
            <h3>Tune in at 1:30 PM on October 3, 2021.</h3>
          </div>
        )}

        <div className="text-center mt-5">
          <Link href="/registry" passHref>
            <Button variant="secondary" size="lg">
              Browse Registry
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default EditRSVP;

// https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
