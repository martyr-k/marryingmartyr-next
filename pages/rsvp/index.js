import axios from "axios";
import Router from "next/router";
import Image from "next/image";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useRef, useEffect, useState } from "react";
import { toast } from "react-toastify";

import useToggle from "hooks/useToggle";
import ContactForm from "components/ContactForm";
import rsvpImage from "public/imgs/rsvp.jpg";
import { useAuthentication } from "contexts/AuthenticationContext";
import PageLayout from "components/PageLayout";
import styles from "styles/RSVP.module.css";

const RSVP = () => {
  const inviteCodeRef = useRef();
  const { token, setToken } = useAuthentication();
  const [code, setCode] = useState();
  const [show, toggleModal] = useToggle(false);

  useEffect(() => {
    if (token) {
      if (
        code?.attendance === "virtual" ||
        (code?.attendance === "in-person" && code?.rsvp)
      ) {
        Router.replace("/");
      } else {
        Router.replace("/rsvp/confirm");
      }
    }
  }, [token, code]);

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

  return (
    <PageLayout title="RSVP">
      <div className={styles.main}>
        <Image
          src={rsvpImage}
          alt="rsvp image"
          objectFit="cover"
          objectPosition="center 35%"
        />

        <h1 className="display-3 text-center pt-5">
          We can&apos;t wait for you to celebrate with us!
        </h1>

        <Form className="mt-5 text-center w-75 mx-auto" onSubmit={handleSubmit}>
          <Form.Group as={Row} className="mb-2" controlId="invite-code">
            <Form.Label
              className="text-start text-md-end display-3"
              column
              md={4}
            >
              Invite Code:
            </Form.Label>
            <Col md={4}>
              <Form.Control
                type="password"
                placeholder="????????????????????????"
                ref={inviteCodeRef}
              />
            </Col>
          </Form.Group>
          <Button className="mt-3 btn-burgundy" type="submit" size="lg">
            Submit
          </Button>
        </Form>

        <p
          className={`text-center mt-5 text-white lead ${styles.toggler}`}
          onClick={toggleModal}
        >
          If you have any questions click here to contact us!
        </p>
        <ContactForm show={show} toggleModal={toggleModal} />
      </div>
    </PageLayout>
  );
};

export default RSVP;
