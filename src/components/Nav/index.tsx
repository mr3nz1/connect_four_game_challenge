import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { Logo, Menu } from "../../assets/icons";
import Button from "../Button";

export default function Nav() {
  return (
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

      <div className={styles.menu}>
        <Menu />
      </div>
    </nav>
  );
}
