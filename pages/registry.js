import { Container } from "react-bootstrap";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";

import PaymentSuccess from "components/PaymentSuccess";
import ContactForm from "components/ContactForm";
import useToggle from "hooks/useToggle";
import { useAuthentication } from "contexts/AuthenticationContext";
import useInput from "hooks/useInput";
import PageLayout from "components/PageLayout";
import LoadingSpinner from "components/LoadingSpinner";
import useAuthenticatedClient from "hooks/useAuthenticatedClient";
import amazonLogo from "public/imgs/amazon.png";
import bedBathLogo from "public/imgs/bedbath.png";
import styles from "styles/Registry.module.css";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Registry = () => {
  const { token } = useAuthentication();
  const { isLoading } = useAuthenticatedClient("/rsvp");
  const { value: amount, handleChange } = useInput("");
  const [successModal, setSuccessModal] = useState(false);
  const [show, toggleModal] = useToggle(false);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setSuccessModal(true);
    }

    if (query.get("cancelled")) {
      toast.error("Transaction aborted, you have not been charged.");
    }
  }, []);

  const createCheckoutSession = async (event) => {
    try {
      event.preventDefault();

      const session = await axios.post(
        "/api/create-checkout-session",
        {
          amount,
        },
        {
          headers: {
            authorization: token.value,
          },
        }
      );

      const stripe = await stripePromise;

      return stripe.redirectToCheckout({
        sessionId: session.data.data.id,
      });
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
    <PageLayout title="Registry">
      <div className={`${styles.main} p-4`}>
        <Container>
          <h1 className="display-2 text-center">how to gift us</h1>
          <div>
            <p className={`${styles.header} lead text-center`}>
              Gift regisistries for Amazon and Bed Bath & Beyond are included.
            </p>
            <p className={`${styles.header} lead text-center`}>
              Alternatively, we&apos;ve included a cash fund for those who would
              like to contribute to our house and honeymoon!
            </p>
          </div>

          <section className={`${styles.vendor} amazon mt-5 pt-lg-4 pb-4 pe-4`}>
            <div className="row gx-0">
              <div className="col-auto d-flex mx-auto ps-4 ps-lg-0">
                <Image
                  className="align-self-center"
                  src={amazonLogo}
                  width={300}
                  height={200}
                  alt="amazon logo"
                  priority
                />
              </div>
              <div className="col-12 col-lg">
                <ol>
                  <li>
                    Access the gift registry{" "}
                    <a
                      href="https://www.amazon.ca/wedding/share/marrying-martyr"
                      target="_blank"
                      rel="noreferrer"
                    >
                      here.
                    </a>
                  </li>
                  <li>Select a gift to purchase.</li>
                  <li>
                    Upon selecting a gift you will have two options; first,
                    making the purchase through Amazon or second, marking the
                    gift as purchased if you plan on purchasing it elsewhere.
                  </li>
                  <li>
                    If you selected the option to purchase the gift through
                    Amazon, it will be added to your cart and you will need to
                    checkout to complete the transaction.
                  </li>
                  <ul>
                    <li>
                      Note: Ensure the purchase is being made for{" "}
                      <strong className="text-dark">
                        &quot;Kelub Martyr and Victoria George&apos;s Wedding
                        Registry&quot;
                      </strong>{" "}
                      otherwise we will not receive the item.
                    </li>
                  </ul>
                  <li className="mb-0">
                    Once you have completed the purchase, Amazon will ship the
                    items to our designated address closer to the wedding date.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section className={`${styles.vendor} mt-5 pe-4 ps-lg-4 py-4`}>
            <div className="row gx-0">
              <div className="col-auto d-flex mx-auto ps-4 ps-lg-0">
                <Image
                  className="align-self-center"
                  src={bedBathLogo}
                  width={300}
                  height={200}
                  alt="bed bath and beyond logo"
                  priority
                />
              </div>
              <div className="col-12 col-lg mt-4 mt-lg-0">
                <ol>
                  <li>
                    Access the gift registry{" "}
                    <a
                      href="https://www.bedbathandbeyond.ca/store/giftregistry/viewregistryguest/550155365?eventType=Wedding"
                      target="_blank"
                      rel="noreferrer"
                    >
                      here.
                    </a>
                  </li>
                  <li>Select a gift to purchase.</li>
                  <li>
                    Add the gift to your cart and proceed with the checkout
                    process.
                  </li>
                  <ul>
                    <li>
                      Note: Ensure the purchase is being made for{" "}
                      <strong className="text-dark">
                        &quot;Kelub & Victoria&apos;s Registry&quot;
                      </strong>{" "}
                      otherwise we will not receive the item.
                    </li>
                  </ul>
                  <li className="mb-0">
                    Once you have completed the purchase, Bed Bath & Beyond will
                    ship the items to our designated address closer to the
                    wedding date.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section className={`${styles.cash} mt-5 mb-3`}>
            <div className="row gx-0">
              <div className="col-12 col-md">
                <div className="p-4">
                  <h2>
                    <i className="bi bi-cash-stack"></i> Cash Fund
                  </h2>
                  <p className="mt-4">
                    <i className="bi bi-lock"></i> You will be redirected to a
                    secure page to complete your transaction.
                  </p>
                  <div className="d-flex">
                    <p className="flex-grow-0 me-4">Contributions go towards</p>
                    <hr className="me-4" />
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <i className={`${styles.check} bi bi-check-circle-fill`}>
                        {" "}
                        <span>Honeymoon</span>
                      </i>
                    </div>
                    <div className="col-6">
                      <i className={`${styles.check} bi bi-check-circle-fill`}>
                        {" "}
                        <span>Making our house a home</span>
                      </i>
                    </div>
                    <div className="col-12">
                      <p className="mb-0 mt-3 text-dark">
                        <strong>
                          Alternatively, you may send us an e-transfer at
                          admin@marryingmartyr.ca
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${styles.cashInput} col-md-3 d-flex justify-content-center align-items-center py-4 gx-4 gx-xl-0`}
              >
                <form onSubmit={createCheckoutSession}>
                  <div className="mb-2">
                    <label className="form-label" htmlFor="cash-gift-amount">
                      Enter Gift Amount ($CAD):
                    </label>
                    <input
                      className="form-control"
                      type="number"
                      onChange={handleChange}
                      value={amount}
                      min="1"
                      required
                    />
                    <small className="text-muted">
                      Minimum $1.00 Required.
                    </small>
                  </div>
                  <button className="btn btn-burgundy w-100" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </section>

          <section className={`${styles.contact} mt-5`}>
            <p
              className="lead text-center cursor-pointer"
              onClick={toggleModal}
            >
              If you have any questions click here to contact us!
            </p>
          </section>
        </Container>
        <ContactForm show={show} toggleModal={toggleModal} />
        <PaymentSuccess
          successModal={successModal}
          handleClose={setSuccessModal}
        />
      </div>
    </PageLayout>
  );
};

export default Registry;
