import styles from "./features.module.css";
import features from "../../features.json";

import Feature from "../Feature";

export default function Features({
  numberOfFeatures,
}: {
  numberOfFeatures: number;
}) {
  return (
    <>
      <div className={styles.container}>
        {features.slice(0, numberOfFeatures).map((feature) => {
          return (
            <Feature
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          );
        })}
      </div>
    </>
  );
}
