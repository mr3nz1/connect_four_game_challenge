import styles from "./hero.module.css";
import Button from "../ButtonOutline";

export default function Hero({
  title,
  description,
  buttonText,
  isReverse,
  image,
  isDark,
  isColoredLineOpen,
}: {
  title: string;
  description: string;
  buttonText?: string;
  isReverse: boolean;
  image: string;
  isDark: boolean;
  isColoredLineOpen: boolean;
}) {
  return (
    <>
      <div className={`${isReverse ? styles.containerReverse : styles.container}`}>
        <div className={isDark ? styles.col1_dark : styles.col1_light}>
          <h1 className={`${styles.h1}  hidden`}>{title}</h1>
          <p className={`${styles.p}  hidden`}>{description}</p>
          {buttonText && <Button buttonText={buttonText} isDark={!isDark} />}

          {isColoredLineOpen && ( 
            <div className={styles.colored_line}>
              <div></div>
            </div>
          )}
        </div>
        <div className={styles.col2}>
          <img className={`${styles.image} hidden-fadeIn`} src={image} alt="" />
        </div>
      </div>
    </>
  );
}
