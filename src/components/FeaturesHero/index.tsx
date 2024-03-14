import styles from "./featuresHero.module.css";
import heroImage from "../../assets/stories/desktop/moon-of-appalacia.jpg";
import Button from "../ButtonOutline";

export default function FeaturesHero() {
  return (
    <>
      <div className={styles.container}>
        <img src={heroImage} alt="" />

        <div>
          <div className={styles.textContainer}>
            <p className={styles.tag}>Last month's featured story</p>
            <h1>Hazy full moon of Appalachia</h1>
            <p className={styles.date}>
              March 2nd 2020 <span>by John Appleseed</span>
            </p>
            <p>
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>
            <Button isDark={false} buttonText="read the story" />
          </div>
        </div>
      </div>
    </>
  );
}
