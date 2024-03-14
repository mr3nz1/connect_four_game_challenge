import Button from "../Button";
import styles from "./packageCard.module.css";

export default function PackageCard({
  title,
  description,
  price,
  duration,
  isDark,
}: {
  title: string;
  description: string;
  price: string;
  duration: string;
  isDark?: boolean;
}) {
  return (
    <>
      <div className={isDark ? styles.darkContainer : styles.lightContainer}>
        <div className={styles.coloredLine}></div>
        <div>
          <h2>{title}</h2>
        </div>

        <div className={styles.description}>
          <p>{description}</p>
        </div>

        <div className={styles.priceContainer}>
          <p className={styles.price}>{price}</p>
          <p className={styles.time}>{duration}</p>
        </div>

        <Button buttonText="pick plan" isDark={isDark} />
      </div>
    </>
  );
}
