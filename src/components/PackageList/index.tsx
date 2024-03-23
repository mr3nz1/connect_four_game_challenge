import styles from "./packageList.module.css";
import checkImage from "../../assets/pricing/desktop/check.svg";

export default function PackageList() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Compare</h1>
        </div>

        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr className={`${styles.tr} hidden`}>
                <th>
                  <p>The features</p>
                </th>
                <th>
                  <p>basic</p>
                </th>
                <th>
                  <p>pro</p>
                </th>
                <th>
                  <p>business</p>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className={`${styles.tr} hidden`}>
                <td>Unlimited Story Posting</td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
              </tr>
              <tr className={`${styles.tr} hidden`}>
                <td>Unlimited Photo Upload</td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
              </tr>
              <tr className={`${styles.tr} hidden`}>
                <td>Embedding Custom Content</td>
                <td></td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
              </tr>
              <tr className={`${styles.tr} hidden`}>
                <td>Customize Metadata</td>
                <td></td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
              </tr>
              <tr className={`${styles.tr} hidden`}>
                <td>Advanced Metrics</td>
                <td></td>
                <td></td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
              </tr>
              <tr className={`${styles.tr} hidden`}>
                <td>Photo Downloads</td>
                <td></td>
                <td></td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
              </tr>
              <tr className={`${styles.tr} hidden`}>
                <td>Search Engine Indexing</td>
                <td></td>
                <td></td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
              </tr>
              <tr className={`${styles.tr} hidden`}>
                <td>Custom Analytics</td>
                <td></td>
                <td></td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
