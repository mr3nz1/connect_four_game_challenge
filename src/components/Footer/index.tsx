import styles from "./footer.module.css";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
  Logo,
} from "../../assets/icons";
import Button from "../ButtonOutline";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.col1}>
          <Logo color="white" />

          <div>
            <Facebook color="white" />
            <YouTube color="white" />
            <Twitter color="white" />
            <Pinterest color="white" />
            <Instagram color="white" />
          </div>
        </div>

        <div className={styles.col2}>
          <Link className={styles.link} to="/">
            home
          </Link>
          <Link className={styles.link} to="/stories">
            stories
          </Link>
          <Link className={styles.link} to="/features">
            features
          </Link>
          <Link className={styles.link} to="/pricing">
            pricing
          </Link>
        </div>
        <div className={styles.col3}>
          <Button isDark={false} buttonText="get an invite" />

          <p>Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}
