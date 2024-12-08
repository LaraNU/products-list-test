import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <li className={styles.navLink}>
          <Link to="/products">All products</Link>
        </li>
        <li className={styles.navLink}>
          <Link to="/create-product">Create product</Link>
        </li>
      </nav>
    </header>
  );
};

export default Navigation;
