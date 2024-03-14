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
              <tr className={styles.tr}>
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
              <tr className={styles.tr}>
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
              <tr className={styles.tr}>
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
              <tr className={styles.tr}>
                <td>Embedding Custom Content</td>
                <td></td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
              </tr>
              <tr className={styles.tr}>
                <td>Customize Metadata</td>
                <td></td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
              </tr>
              <tr className={styles.tr}>
                <td>Advanced Metrics</td>
                <td></td>
                <td></td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
              </tr>
              <tr className={styles.tr}>
                <td>Photo Downloads</td>
                <td></td>
                <td></td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
              </tr>
              <tr className={styles.tr}>
                <td>Search Engine Indexing</td>
                <td></td>
                <td></td>
                <td className={styles.check}>
                  <img src={checkImage} />
                </td>
              </tr>
              <tr className={styles.tr}>
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
