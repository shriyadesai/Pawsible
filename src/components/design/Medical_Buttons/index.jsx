// styles
import styles from "./Medical_Buttons.module.css";

/**
 *
 * @param {String} children Children of the Button Component
 * @param {Function} onHandle Function that is performed when the button is clicked
 * @param {disabled} disabled sets if the button is disabled or not
 * @author VB1-VENOM <varunsatheesh55@gmail.com>
 * @returns Button
 */
const Medical_Button = ({ children, onHandle, disabled }) => {
  return (
    <button className={styles.button} onClick={onHandle} disabled={disabled}>
      {children}
    </button>
  );
};

export default Medical_Button;
