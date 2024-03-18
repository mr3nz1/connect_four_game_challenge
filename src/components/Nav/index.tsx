import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { Close, Logo, Menu } from "../../assets/icons";
import Button from "../Button";
import { useState } from "react";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  console.log(isNavOpen);

  return (
    <>
      <div className={styles.backColor}></div>
      <nav className={styles.nav}>
        <Link to="/">
          <Logo color="black" />
        </Link>
        <div className={styles.container}>
          <Link className={styles.link} to="/stories">
            Stories
          </Link>
          <Link className={styles.link} to="/features">
            Features
          </Link>
          <Link className={styles.link} to="/pricing">
            Pricing
          </Link>
        </div>
        <div className={styles.getInvite}>
          <Button buttonText="get an invite" />
        </div>

        <div
          className={styles.menu}
          onClick={() => {
            setIsNavOpen((prevValue) => {
              return !prevValue;
            });
          }}
        >
          {!isNavOpen ? <Menu /> : <Close />}
        </div>
      </nav>

      <div
        className={
          isNavOpen ? styles.mobileNavList : styles.mobileNavListClosed
        }
        // className={styles.mobileNavList}
      >
        <div className={styles.mobileContainer}>
          <Link className={styles.link} to="/stories">
            Stories
          </Link>
          <Link className={styles.link} to="/features">
            Features
          </Link>
          <Link className={styles.link} to="/pricing">
            Pricing
          </Link>
        </div>

        <div className={styles.lineSeparator}></div>

        <div className={styles.getInvite}>
          <Button buttonText="get an invite" />
        </div>
      </div>
    </>
  );
}
