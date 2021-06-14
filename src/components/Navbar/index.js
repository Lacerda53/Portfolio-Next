import styles from "./navbar.module.scss";
import NavLink from "../NavLink";

export function Navbar() {
  return (
    <header className={styles.containerNavbar}>
      <NavLink href="/">
        <a>HOME</a>
      </NavLink>
      <NavLink href="/#work">
        <a>TRABALHOS</a>
      </NavLink>
      <NavLink href="/#about">
        <a>SOBRE</a>
      </NavLink>
      <NavLink href="/#contact">
        <a>CONTATO</a>
      </NavLink>
    </header>
  );
}
