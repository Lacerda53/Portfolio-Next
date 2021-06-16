import styles from "./footer.module.scss";
import Image from "next/image";

export function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <div>
        <h4>© Copyright 2021. Todos os direitos reservados.</h4>
        <p>
          Desenvolvimento e codificação por Guilherme Lacerda // UI Design:
          Bruna Atanes
        </p>
      </div>
      <div className={styles.buttonToTop}>
        <a href="#">
          <Image src="/img/Polygon.svg" width={24} height={24} alt="toTop" />
        </a>
      </div>
    </footer>
  );
}
