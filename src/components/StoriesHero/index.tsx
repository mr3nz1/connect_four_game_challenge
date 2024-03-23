import styles from "./featuresHero.module.css";
import heroImage from "../../assets/stories/desktop/moon-of-appalacia.jpg";
import Button from "../ButtonOutline";

export default function StoriesHero() {
  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* <img src={heroImage} alt="" /> */}

        <div>
          <div className={`${styles.textContainer}`}>
            <p className={`${styles.tag} hidden`}>
              Last month's featured story
            </p>
            <h1 className=" hidden">Hazy full moon of Appalachia</h1>
            <p className={`${styles.date} hidden`}>
              March 2nd 2020 <span>by John Appleseed</span>
            </p>
            <p className="hidden">
              The dissected plateau area, while not actually made up of
              geological mountains, is popularly called "mountains," especially
              in eastern Kentucky and West Virginia, and while the ridges are
              not high, the terrain is extremely rugged.
            </p>
            <span className="hidden">
              <Button isDark={false} buttonText="read the story" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
