import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.footer__icons}>
                <div className={styles.icons__logo}>
                    <a href="https://www.google.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.google.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="footer__right">
                <p>© 2022 PAWSIBLE, All Rights Reserved</p>
            </div>
        </section>
    );
}

export default Footer;