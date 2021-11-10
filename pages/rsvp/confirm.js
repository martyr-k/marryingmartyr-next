import axios from "axios";
import Router from "next/router";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";

import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import LoadingSpinner from "components/LoadingSpinner";
import PageLayout from "components/PageLayout";
import styles from "styles/RSVP.module.css";

const RSVP = () => {
  const { code, isLoading } = useAuthenticatedClient("/rsvp");
  const inviteCodeRef = useRef();

  //   useEffect(() => {
  //     if (token) {
  //       if (
  //         code?.attendance === "virtual" ||
  //         (code?.attendance === "in-person" && code?.rsvp)
  //       ) {
  //         Router.replace("/");
  //       } else {
  //         Router.replace("/rsvp/confirm");
  //       }
  //     }
  //   }, [token, code]);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const { data } = await axios.post("/api/auth/login", {
        inviteCode: inviteCodeRef.current.value,
      });

      toast.success("Success!");
      setCode(data.code);
      setToken(data.token);
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
                          value="true"
                          aria-label="Checkbox for confirming guest attendance"
                        />
                      </div>
                      <input
                        className="form-control"
                        disabled
                        value={guest}
                        aria-label="Text input with checkbox"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <p className="lead mb-2 text-center">
                What song would make you dance?
              </p>
              <div className="row g-1 mb-2">
                <label className="col-lg-2" htmlFor="song">
                  Song:
                </label>
                <div className="col-lg-10">
                  <input
                    className="form-control"
                    type="text"
                    name="song"
                    id="song"
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
                    name="artist"
                    id="artist"
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
