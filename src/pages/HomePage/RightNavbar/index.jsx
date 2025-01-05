// components
import RightNavbarBox from "../../../components/design/Box/RighNavbarBox";

// styles
import styles from "./RightNavbar.module.css";

// constants
import { navLinks } from "../../../constants/rightNavbar.constants";

/**
 * 
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns RightNavbar component for Homepage
 */
const RightNavbar = () => {
  return (
    <section className={styles.rightNavbar}>
      {navLinks.map((link) => (
        <RightNavbarBox
          text={link.text}
          image={link.image}
          key={link.key}
          link={link.link}
        />
      ))}
    </section>
  );
};

export default RightNavbar;
