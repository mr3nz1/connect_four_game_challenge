import styles from "./cardContainer.module.css";
import { ReactNode } from "react";

export default function CardContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
}
