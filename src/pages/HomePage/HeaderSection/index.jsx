// styles
import styles from "./HeaderSection.module.css";
import sectionStyles from "../../Section.module.css";

// Components
import Button from "../../../components/design/Buttons";

/**
 *
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns HeaderSection component for Homepage
 */
const HeaderSection = () => {
  return (
    <section className={styles.homepage__left}>
      <div className={styles.left__titlepart}>
        <h1 className={styles.left__pes}>PROJECT</h1>
        <h1 className={styles.left__title}>
          <span className={sectionStyles.blueHeader}>PAWSIBLE</span>
        </h1>
      </div>
      <div className={styles.left__content}>
        <div className={styles.content__bar}></div>
        <p>
          Their lives matter.
          <br />
          Rescue animals.
        </p>
      </div>
      <div>
        <Button
          onHandle={() => {
            window.location.href = "https://www.google.com";
            console.log("Hi");
          }}
          disabled={false}
        >
          CONTRIBUTE NOW
        </Button>
      </div>
    </section>
  );
};

export default HeaderSection;
