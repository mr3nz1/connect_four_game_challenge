import styles from "./getInviteHero.module.css";

import Button from "../ButtonOutline";
import image from "../../assets/shared/desktop/bg-beta.jpg";

export default function GetInviteHero() {
  return (
    <>
      <div
        className={styles.container}
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <img src={image} alt="" /> */}
        <div>
          <h1 className="hidden">We're in Beta. Get your invite today!</h1>
          <span className="hidden">
            <Button isDark={false} buttonText="get an invite" />
          </span>
        </div>
      </div>
    </>
  );
}
