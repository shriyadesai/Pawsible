import styles from "../Carousel.module.css";

/**
 *
 * @param {String} title Contains the title of the webinar
 * @param {String} text Contains the body of the webinar
 * @returns The WebinarBox component
 * @author ammrit2312 <amriteshc101@icloud.com>
 */
const WebinarsBox = ({ title, text }) => {
  return (
    <div className={styles.webinarBox}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.body}>{text}</p>
    </div>
  );
};

export default WebinarsBox;
