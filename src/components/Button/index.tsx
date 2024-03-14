import styles from "./button.module.css";
import { Link } from "react-router-dom";

export default function Button({
  buttonText,
  isDark,
}: {
  buttonText: string;
  isDark?: boolean;
}) {
  return (
    <>
      <Link className={isDark ? styles.darkBtn : styles.btn} to="">
        {buttonText}
      </Link>
    </>
  );
}
