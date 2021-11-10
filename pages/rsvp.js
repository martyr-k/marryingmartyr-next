import axios from "axios";
import Router from "next/router";
import Image from "next/image";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useRef, useEffect } from "react";
import { toast } from "react-toastify";

import { useAuthentication } from "contexts/AuthenticationContext";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import PageLayout from "components/PageLayout";
import styles from "styles/RSVP.module.css";

const RSVP = () => {
  const { code } = useAuthenticatedClient();
  const inviteCodeRef = useRef();
  const { token, setToken } = useAuthentication();

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

      // virtual guests
      if (!data.guest) {
        toast.success("Code Accepted!");
        setToken(response.data.token);
      } else {
        // in-person guests
        if (data.guest.rsvp) {
        }
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

        <Form
          className="mt-5 text-center w-75 mx-auto"
          onSubmit={handleLoginSubmit}
        >
          <Form.Group as={Row} className="mb-3" controlId="invite-code">
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
          <Button variant="secondary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </PageLayout>
  );
};

export default RSVP;
