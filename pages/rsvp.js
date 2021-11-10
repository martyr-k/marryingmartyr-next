import axios from "axios";
import Router from "next/router";
import Image from "next/image";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useAuthentication } from "contexts/AuthenticationContext";
import PageLayout from "components/PageLayout";
import styles from "styles/RSVP.module.css";

const RSVP = () => {
  const inviteCodeRef = useRef();
  const { token, setToken } = useAuthentication();
  const [guest, setGuest] = useState();

  useEffect(() => {
    if (token) {
      Router.replace("/");
    }
  }, [token]);

  const handleLoginSubmit = async (event) => {
    try {
      event.preventDefault();

      const { data } = await axios.post("/api/auth/login", {
        inviteCode: inviteCodeRef.current.value,
      });

      // virtual guests & rsvp'ed in-person
      if (!data.guest) {
        toast.success("Success!");
        setToken(data.token);
      } else {
        toast.success("Code Accepted!");
        setGuest(data.guest);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
      console.log(error);
    }
  };

  const handleRSVPSubmit = async (event) => {
    try {
      event.preventDefault();

      const { data } = await axios.post("/api/rsvp", {
        id: guest.id,
      });

      // virtual guests & rsvp'ed in-person
      if (!data.guest) {
        toast.success("Success!");
        setToken(data.token);
      } else {
        toast.success("Code Accepted!");
        setGuest(data.guest);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
      console.log(error);
    }
  };

  return (
    <PageLayout>
      <div className={styles.main}>
        <div className={styles.imageWrapper}>
          <Image
            src="/imgs/rsvp.jpg"
            layout="fill"
            alt="rsvp image"
            objectFit="cover"
            objectPosition="center 35%"
          />
        </div>

        <h1 className="display-3 text-center pt-5">
          We can&apos;t wait for you to celebrate with us!
        </h1>

        {guest ? (
          <form className="mt-5 w-75 mx-auto">
            <div className="row">
              <div className="col-md-6">
                <h2 className="lead mb-3 text-center text-md-start display-4">
                  Please confirm who will be attending:
                </h2>
                <div>
                  {guest.invitedGuests.map((guest, index) => {
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
        ) : (
          <Form
            className="mt-5 text-center w-75 mx-auto"
            onSubmit={handleLoginSubmit}
          >
            <Form.Group as={Row} className="mb-2" controlId="invite-code">
              <Form.Label className="text-end" column md={4}>
                Invite Code:
              </Form.Label>
              <Col md={4}>
                <Form.Control
                  type="password"
                  placeholder="••••••••"
                  ref={inviteCodeRef}
                />
              </Col>
            </Form.Group>
            <Button
              className="mt-3"
              variant="secondary"
              type="submit"
              size="lg"
            >
              Submit
            </Button>
          </Form>
        )}
      </div>
    </PageLayout>
  );
};

export default RSVP;
