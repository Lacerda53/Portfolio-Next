import styles from "./welcome.module.scss";
import Image from "next/image";

export function Welcome() {
  return (
    <section id="#" className={styles.containerWelcome}>
      <div>
        <div data-aos="fade-up" className={styles.containerAvatar}>
          <Image
            src="/img/guilherme.png"
            alt="guilherme"
            width={294}
            height={457}
          />
        </div>
        <div className={styles.right}>
          <h1 data-aos="fade-down">Guilherme Lacerda</h1>
          <p data-aos="fade-left">
            Sou <strong>desenvolvedor Frontend</strong>, acadêmico de Sistemas
            de Informação, cursando o 7º período. Atualmente trabalho como
            Auxiliar Administrativo de TI no UNITPAC - Centro Universitário
            Tocantinense Presidente Antônio Carlos.
          </p>
        </div>
      </div>
    </section>
  );
}
