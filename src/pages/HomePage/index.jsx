// styles
import styles from "./HomePage.module.css";
import sectionStyles from "../Section.module.css";

// Components
import HeaderSection from "./HeaderSection";
import RightNavbar from "./RightNavbar";

/**
 * 
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns HomePage of the website
 */
const HomePage = () => {
  return (
    <main className={`${styles.homepage} ${sectionStyles.headerSection}`}>
      <HeaderSection/>
      <section className={styles.homepage__right}>
        <RightNavbar />
      </section>
    </main>
  );
};

export default HomePage;
