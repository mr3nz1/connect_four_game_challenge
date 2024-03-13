import styles from "./card.module.css";
import { Arrow } from "../../assets/icons";

export default function Card({
  image,
  title,
  author,
}: {
  image: string;
  title: string;
  author: string;
}) {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img src={image} alt="" />

          <div>
            <div className={styles.textContainer}>
              <h2>{title}</h2>
              <p>{author}</p>
            </div>

            <div className={styles.horizontalSeparator}></div>

            <button>
              <span>Read Story</span>
              <Arrow color="white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
