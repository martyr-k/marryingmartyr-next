import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import monogram from "../public/imgs/monogram.png";
import styles from "./styles/NavigationBar.module.css";

const NavigationBar = () => {
  const { code } = useAuthenticatedClient();

  return (
    <Navbar className={styles.navbar} bg="black" expand="lg" variant="dark">
      <Container fluid>
        <Link href="/" passHref>
          <div className="cursor-pointer" style={{ height: "50px" }}>
            <Image
              src={monogram}
              alt="wedding monogram"
              height={50}
              width={50}
            />
          </div>
        </Link>
        <Navbar.Toggle aria-controls="navbarDropdown" />
        <Navbar.Collapse id="navbarDropdown">
          <Nav className="justify-content-center w-100">
            <Link href="/" passHref>
              <Nav.Link className={styles.navLink}>Home</Nav.Link>
            </Link>
            {code ? (
              <Link href="/edit-rsvp" passHref>
                <Nav.Link className={styles.navLink}>Edit RSVP</Nav.Link>
              </Link>
            ) : (
              <Link href="/rsvp" passHref>
                <Nav.Link className={styles.navLink}>RSVP</Nav.Link>
              </Link>
            )}
            <Link href="/rsvp" passHref>
              <Nav.Link className={styles.navLink}>Our Story</Nav.Link>
            </Link>
            <Link href="/rsvp" passHref>
              <Nav.Link className={styles.navLink}>FAQ</Nav.Link>
            </Link>
            <Link href="/rsvp" passHref>
              <Nav.Link className={styles.navLink}>Registry</Nav.Link>
            </Link>
            <Link href="/rsvp" passHref>
              <Nav.Link className={styles.navLink}>Wedding Party</Nav.Link>
            </Link>
            <Link href="/rsvp" passHref>
              <Nav.Link className={styles.navLink}>Livestream</Nav.Link>
            </Link>
            {["admin"].includes(code?.role) && (
              <Link href="/dashboard" passHref>
                <Nav.Link className={styles.navLink}>Dashboard</Nav.Link>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
