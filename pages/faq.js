import { Container, Accordion } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

import useToggle from "hooks/useToggle";
import ContactForm from "components/ContactForm";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import PageLayout from "components/PageLayout";
import styles from "styles/FAQ.module.css";

function CustomToggle({ children, eventKey }) {
  const handleClick = useAccordionButton(eventKey);

  return (
    <span className="text-dark" onClick={handleClick}>
      {children}
    </span>
  );
}

const FAQ = () => {
  const { code } = useAuthenticatedClient();
  const [show, toggleModal] = useToggle(false);

  return (
    <PageLayout title="FAQ">
      <div className={styles.main}>
        <Container className="py-4">
          <h1 className="display-1 text-center my-5">
            Answers to your questions!
          </h1>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>RSVP Deadline</Accordion.Header>
              <Accordion.Body>
                You need to RSVP by August 31, 2021 to ensure we have adequate
                time to arrange for seating and food. Unfortunately, we will not
                be accepting RSVPs past this date.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>RSVP</Accordion.Header>
              <Accordion.Body>
                <p>
                  Guests are required to RSVP on our wedding website. We have
                  provided you with an alphanumeric RSVP code located at the
                  bottom of your invite, to do so. This gives you full access to
                  our wedding website.{" "}
                  <span className="text-black">
                    Note: The deadline to RSVP is August 31, 2021.
                  </span>
                </p>
                <h5 className="text-black">
                  Guests with an &quot;in-person&quot; invite
                </h5>
                <hr />
                <p>
                  To RSVP, simply click the “RSVP” tab in the top and enter your
                  RSVP code. You will see your name and the names of all other
                  individuals associated with that code, who are included for
                  in-person attendance.
                </p>
                <p>
                  To confirm attendance, check the box next to the names of
                  those who will be attending and click submit.
                </p>
                <p>
                  You can make changes up until August 31, 2021. To make a
                  change, simply click &quot;Edit RSVP&quot;, make your changes,
                  then click submit.
                </p>
                <h5 className="text-black">
                  Guests with a &quot;virtual&quot; invite
                </h5>
                <hr />
                <p>
                  To RSVP, simply click the “RSVP” tab in the top and enter your
                  RSVP code.
                </p>
                <p>
                  On our wedding day, simply click the “livestream” button at
                  the top and you will have full access to a livestream of our
                  ceremony! 😊
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                COVID-19 Policies & Precautions
              </Accordion.Header>
              <Accordion.Body>
                {!code || code.attendance === "in-person" ? (
                  <>
                    <p>
                      We ask that <u>ALL</u> guests follow the COVID-19
                      regulations that are in effect at the time of our wedding.
                    </p>
                    <p>
                      <strong>
                        Guests will be required to wear a mask and follow social
                        distancing protocols, that is, remain 2 metres (6 feet)
                        apart.
                      </strong>
                    </p>
                    <p>
                      As a safety precaution, we ask that guests refrain from
                      hugging individuals outside of their family circle or
                      household. We know that this is inconvenient, but better
                      safe than sorry!
                    </p>
                    <p>
                      For guests with an “in-person” invite, we ask that you
                      stay at home (and of course, seek medical attention if you
                      need it) if you are exhibiting any of the signs/symptoms
                      below of COVID-19 at the time of our ceremony. You can
                      watch the ceremony virtually by clicking &quot;Edit
                      RSVP&quot; and unchecking your name and on the day of,
                      clicking the “livestream” button at the top to have full
                      access to a livestream of our ceremony!
                    </p>
                    <p>
                      Additionally, guests with an “in-person invite” can also
                      choose to watch the wedding virtually instead by following
                      the aformentioned instructions.
                    </p>
                    <p>Some of the symptoms/signs of COVID-19:</p>
                    <ul>
                      <li>Fever (temperature higher than 37.8 degrees)</li>
                      <li>New or worsening cough</li>
                      <li>Tiredness</li>
                      <li>Shortness of breath or difficulty breathing</li>
                      <li>Sore throat</li>
                      <li>Loss of taste or smell</li>
                      <li>Nausea, vomiting, diarrhea</li>
                      <li>Chest pain</li>
                      <li>
                        Runny nose or nasal congestion (not caused by seasonal
                        allergies)
                      </li>
                    </ul>
                  </>
                ) : (
                  <p>
                    Since you’re at home you won’t have to worry about any
                    social distancing! Enjoy watching free without masks! 😌
                  </p>
                )}
              </Accordion.Body>
            </Accordion.Item>
            {code?.attendance === "in-person" && (
              <>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Location</Accordion.Header>
                  <Accordion.Body>
                    <div className="mb-4">
                      <p className="text-dark">
                        Marriage Ceremony: The Church of God Sabbath-Keeping
                      </p>
                      <p>
                        Address: 312 Rexdale Blvd, Etobicoke, ON M9W 1R6 (near
                        Kipling Avenue & Highway 427)
                      </p>
                    </div>
                    <hr />
                    <div className="mt-3">
                      <p className="text-dark">
                        Reception: Pickering Event Centre (PEC)
                      </p>
                      <p>
                        Address: 1755 Pickering Pkwy Unit C4, Pickering, ON L1V
                        6K5 (near Brock Road & Highway 401)
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Dress Code</Accordion.Header>
                  <Accordion.Body>
                    We encourage our guests to dress in formal attire but we
                    also want you to feel comfortable when you dance. So, please
                    take that into consideration! 💃🏽🕺🏾
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                  <Accordion.Header>Parking</Accordion.Header>
                  <Accordion.Body>
                    Parking will be available for free at both the ceremony and
                    reception venues.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                  <Accordion.Header>Dancing</Accordion.Header>
                  <Accordion.Body>
                    There will be a DJ at the reception so hopefully you’ll hear
                    your favourite tunes, and you can dance the night away!
                    However, we ask that everyone follow the COVID-19 protocols
                    in effect at the time regarding social distancing.{" "}
                    <CustomToggle eventKey="2">
                      (See COVID-19 Polices & Precautions)
                    </CustomToggle>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                  <Accordion.Header>Livestream Details</Accordion.Header>
                  <Accordion.Body>
                    <p>
                      The ceremony livestream can be accessed by simply clicking
                      the “livestream” button at the top. The stream will be
                      live at 1:30 PM on October 3rd, 2021.
                    </p>
                    <p>
                      Alternatively, you may click{" "}
                      <a
                        className="text-dark text-decoration-underline"
                        href="/stream"
                      >
                        here
                      </a>{" "}
                      to access the stream!
                    </p>
                    <p>
                      If you are experiencing difficulties watching the stream
                      on our website can try watching directly on YouTube by
                      clicking here:{" "}
                      <a
                        className="text-dark text-decoration-underline"
                        href="https://youtu.be/HLOv0DS4aNQ"
                        target="_blank"
                        rel="noreferrer"
                      >
                        https://youtu.be/HLOv0DS4aNQ
                      </a>
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </>
            )}
          </Accordion>
          <div className="text-center">
            <button className="btn btn-light mt-5" onClick={toggleModal}>
              For further questions, concerns or FAQ-based suggestions click
              here to contact us!
            </button>
          </div>
          <ContactForm show={show} toggleModal={toggleModal} />
        </Container>
      </div>
    </PageLayout>
  );
};

export default FAQ;
