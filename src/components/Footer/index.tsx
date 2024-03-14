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
          <a className={styles.link} href="">
            home
          </a>
          <a className={styles.link} href="">
            stories
          </a>
          <a className={styles.link} href="">
            features
          </a>
          <a className={styles.link} href="">
            pricing
          </a>
        </div>
        <div className={styles.col3}>
          <Button isDark={false} buttonText="get an invite" />

          <p>Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}
