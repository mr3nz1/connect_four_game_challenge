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
        <img className={`${styles.image} hidden`} src={image} alt="" />
        <div>
          <h2 className="hidden">{title}</h2>
          <p className="hidden">{description}</p>
        </div>
      </div>
    </>
  );
}
