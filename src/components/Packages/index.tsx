import { useState } from "react";
import styles from "./packages.module.css";

import packages from "../../packages.json";
import PackageCard from "../PackageCard";

export default function Packages() {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.toggleContainer} hidden`}>
          <p className={isMonthly ? styles.selected : styles.unselected}>
            Monthly
          </p>
          <input
            type="checkbox"
            className={styles.input}
            onClick={() =>
              setIsMonthly((newIsMonthly) => {
                return !newIsMonthly;
              })
            }
          />
          <p className={isMonthly ? styles.selected : styles.unselected}>
            Yearly
          </p>
        </div>

        <div className={styles.cardsContainer}>
          {packages.map((item) => {
            return (
              <PackageCard
                key={item.id}
                title={item.title}
                description={item.description}
                price={isMonthly ? item.pricePerMonth : item.pricePerYear}
                duration={isMonthly ? "per month" : "per year"}
                isDark={item.title.toLowerCase() === "pro" ? true : false}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
