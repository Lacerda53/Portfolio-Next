import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.containerFooter}>
      <div>
        <h4>© Copyright {new Date().getFullYear()}. Todos os direitos reservados.</h4>
        <p>
          Desenvolvimento e codificação por Guilherme Lacerda // UI Design:
          Bruna Atanes
        </p>
      </div>
    </footer>
  );
}
