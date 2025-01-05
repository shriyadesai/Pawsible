import { useState } from "react";
import styles from "../Box.module.css";
import { useNavigate } from "react-router-dom";

const RightNavbarBox = ({ text, image, link }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  console.log("Link", text);
  return (
    <div
      className={styles.box}
      onClick={(e) => {
        e.preventDefault();
        navigate(link);
      }}
    >
      <div className={`${hover ? styles.isHovering : ""} ${styles.box__secondry}`} />
      <div
        className={styles.box__main}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className={styles.box__image}>
          <img src={image} alt="" loading="lazy"/>
        </div>
        <div className={styles.box__text}>{text}</div>
      </div>
    </div>
  );
};

export default RightNavbarBox;
