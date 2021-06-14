import styles from "./welcome.module.scss";

export function Welcome() {
  return (
    <div className={styles.background}>
      <div className={styles.containerWelcome}>
        <div>
          <div className={styles.containerAvatar}>
            <img src="/img/guilherme.png" alt="" />
          </div>
          <div className={styles.right}>
            <h1>Guilherme Lacerda</h1>
            <p>
              Sou <strong>desenvolvedor fullstack</strong>, acadêmico de
              Sistemas de Informação, cursando o 7º período. Atualmente trabalho
              como Auxiliar Administrativo de TI no UNITPAC - Centro
              Universitário Tocantinense Presidente Antônio Carlos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
