import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/">
        <Logo color="black" />
      </Link>
      <div className={styles.container}>
        <Link className={styles.link} to="">
          Stories
        </Link>
        <Link className={styles.link} to="/features">
          Features
        </Link>
        <Link className={styles.link} to="/pricing">
          Pricing
        </Link>
      </div>
      <Link className={styles.btn} to="">
        Get an invite
      </Link>
    </nav>
  );
}
