import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <li>
          <Link className={styles.navLink} to="/products">
            All products
          </Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/create-product">
            Create product
          </Link>
        </li>
      </nav>
    </header>
  );
};

export default Navigation;
