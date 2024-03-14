import styles from "./feature.module.css";

export default function Feature({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="" />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}
