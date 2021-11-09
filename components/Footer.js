import Image from "next/image";

import monogram from "../public/imgs/monogram.png";
import styles from "components/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <Image
          src={monogram}
          height={200}
          width={200}
          alt="wedding mongogram"
        />
        <p className="lead m-0">#marryingmartyr</p>
        <p>martyrk Design</p>
        <p className={`${styles.hcaptchaText} text-center px-2`}>
          This site is protected by hCaptcha and its{" "}
          <a
            href="https://hcaptcha.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="https://hcaptcha.com/terms" target="_blank" rel="noreferrer">
            Terms of Service
          </a>{" "}
          apply.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
