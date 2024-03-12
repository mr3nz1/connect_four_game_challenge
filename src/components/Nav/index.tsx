import styles from "./nav.module.css";
import logo from "../../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <img src={logo} />
      <div className={styles.container}>
        <Link className={styles.link} to="">
          Stories
        </Link>
        <Link className={styles.link} to="">
          Features
        </Link>
        <Link className={styles.link} to="">
          Pricing
        </Link>
      </div>
      <Link className={styles.btn} to="">
        Get an invite
      </Link>
    </nav>
  );
}

// look into react responsoive
