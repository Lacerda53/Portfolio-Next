import styles from "./welcome.module.scss";
import Image from "next/image";

export function Welcome() {
  return (
    <div id="#" className={styles.containerWelcome}>
      <div>
        <div className={styles.containerAvatar}>
          <Image
            src="/img/guilherme.png"
            alt="guilherme"
            width={294}
            height={457}
          />
        </div>
        <div className={styles.right}>
          <h1>Guilherme Lacerda</h1>
          <p>
            Sou <strong>desenvolvedor fullstack</strong>, acadêmico de Sistemas
            de Informação, cursando o 7º período. Atualmente trabalho como
            Auxiliar Administrativo de TI no UNITPAC - Centro Universitário
            Tocantinense Presidente Antônio Carlos.
          </p>
        </div>
      </div>
    </div>
  );
}
