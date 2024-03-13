import styles from "./features.module.css";

import responsiveImage from "../../assets/features/desktop/responsive.svg";
import noPhotoLimitImage from "../../assets/features/desktop/no-limit.svg";
import embedImage from "../../assets/features/desktop/embed.svg";

export default function Features() {
  return (
    <>
      <div className={styles.container}>
        <div>
          <img className={styles.image} src={responsiveImage} alt="" />
          <div>
            <h2>100% Responsive</h2>
            <p>
              No matter which the device you’re on, our site is fully responsive
              and stories look beautiful on any screen.
            </p>
          </div>
        </div>
        <div>
          <img className={styles.image} src={noPhotoLimitImage} alt="" />
          <div>
            <h2>No Photo Upload Limit</h2>
            <p>
              Our tool has no limits on uploads or bandwidth. Freely upload in
              bulk and share all of your stories in one go.
            </p>
          </div>
        </div>
        <div>
          <img className={styles.image} src={embedImage} alt="" />
          <div>
            <h2>Available to Embed</h2>
            <p>
              Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube
              videos, Google Maps, and more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
