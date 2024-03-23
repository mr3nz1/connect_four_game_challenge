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
          <div className="hidden">
            <h2>{title}</h2>
          </div>

          <div className={`${styles.description} hidden`}>
            <p>{description}</p>
          </div>

          {screenWidth <= 1250 && (
            <span className="hidden">
              <Button buttonText="pick plan" isDark={isDark} />
            </span>
          )}
        </div>

        <div className={styles.priceContainer}>
          <p className={`${styles.price} hidden`}>{price}</p>
          <p className={`${styles.time} hidden`}>{duration}</p>
        </div>

        {screenWidth >= 1250 && (
          <span className="hidden">
            <Button buttonText="pick plan" isDark={isDark} />
          </span>
        )}
      </div>
    </>
  );
}
