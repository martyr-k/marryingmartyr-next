import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
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
              <Link href="/rsvp/edit" passHref>
                <Nav.Link className={styles.navLink}>Edit RSVP</Nav.Link>
              </Link>
            ) : (
              <Link href="/rsvp" passHref>
                <Nav.Link className={styles.navLink}>RSVP</Nav.Link>
              </Link>
            )}
            {code && (
              <Link href="/our-story" passHref>
                <Nav.Link className={styles.navLink}>Our Story</Nav.Link>
              </Link>
            )}
            <Link href="/faq" passHref>
              <Nav.Link className={styles.navLink}>FAQ</Nav.Link>
            </Link>
            {code && (
              <>
                <Link href="/registry" passHref>
                  <Nav.Link className={styles.navLink}>Registry</Nav.Link>
                </Link>
                <Link href="/wedding-party" passHref>
                  <Nav.Link className={styles.navLink}>Wedding Party</Nav.Link>
                </Link>
                <Link href="/livestream" passHref>
                  <Nav.Link className={styles.navLink}>Livestream</Nav.Link>
                </Link>
                {["admin"].includes(code?.role) && (
                  <NavDropdown
                    className={styles.navLink}
                    title="Dashboard"
                    menuVariant="dark"
                  >
                    <NavDropdown.Item as="span">
                      <Link href="/invitees/register" passHref>
                        <Nav.Link className={styles.navLink}>
                          Register Invitees
                        </Nav.Link>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item className={styles.navLink} as="span">
                      <Link href="/invitees" passHref>
                        <Nav.Link className={styles.navLink}>
                          View Invitees
                        </Nav.Link>
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
