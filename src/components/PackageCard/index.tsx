import { useEffect, useState } from "react";
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

  return (
    <>
      <div className={isDark ? styles.darkContainer : styles.lightContainer}>
        <div className={styles.coloredLine}></div>
        <div className={styles.packageInfo}>
          <div>
            <h2>{title}</h2>
          </div>

          <div className={styles.description}>
            <p>{description}</p>
          </div>

          {screenWidth <= 1250 && (
            <Button buttonText="pick plan" isDark={isDark} />
          )}
        </div>

        <div className={styles.priceContainer}>
          <p className={styles.price}>{price}</p>
          <p className={styles.time}>{duration}</p>
        </div>

        {screenWidth >= 1250 && (
          <Button buttonText="pick plan" isDark={isDark} />
        )}
      </div>
    </>
  );
}
