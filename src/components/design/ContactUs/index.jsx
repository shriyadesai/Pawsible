import { useState } from "react";

// styles
import styles from "./ContactUs.module.css";
import sectionStyles from "../../../pages/Section.module.css";

// assets
import Bottle from "../../../assets/bottle.svg";

// components
import Button from "../Buttons";
import showNotification from "../../../utils/notifications.utils";

/**
 * 
 * @author ammrit2312 <amriteshc101@icloud.com>
 * @returns ContactUs component
 */
const ContactUsComp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className={styles.container}>
      <section className={`${styles.mainContainer} ${styles.leftContainer}`}>
        <div className={styles.mainContent}>
          <h2 className={`${sectionStyles.title} ${styles.title}`}>CONTACT</h2>
          <p className={styles.body}>Any questions ?</p>
          <p className={styles.body}>Just send a message</p>
        </div>
      </section>
      <section className={`${styles.mainContainer} ${styles.rightContainer}`}>
        <form className={`${styles.mainContent} ${styles.formMain}`}>
          <div className={styles.formContainer}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              className={styles.input}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className={styles.formContainer}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className={styles.formContainer}>
            <label htmlFor="message">Your Message</label>
            <textarea
              className={`${styles.input} ${styles.inputText}`}
              rows="10"
              cols="20"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <div className={styles.button}>
            <Button
              onHandle={(e) => {
                e.preventDefault();
                console.log(name, email, message);
                showNotification({ title: "API Connect", type: "success" });
              }}
            >
              SEND
            </Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default ContactUsComp;
