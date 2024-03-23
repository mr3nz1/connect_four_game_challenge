import styles from "./button.module.css";

import { Arrow } from "../../assets/icons";

export default function Button({
  buttonText,
  isDark,
}: {
  buttonText: string;
  isDark: boolean;
}) {
  return (
    <>
      <button className={isDark ? styles.btn_dark : styles.btn}>
        <span>{buttonText}</span>
          <Arrow color={isDark ? "black" : "white"} />
      </button>
    </>
  );
}
