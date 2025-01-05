import styles from "./Navbar.module.css";

// assets
import Logo from "../../../assets/logo.png"

// constants
import { Links } from "./Links"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar__logo}>
                <a href="/" rel="noreferrer"><img src={Logo} alt="ECell Logo" /></a>
            </div>
            <div className={styles.navbar__links} >
                {Links.map((link) => (
                    <div className={styles.links__main}>
                        <a href={link.path} key={link.key}>{link.name}</a>
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default Navbar