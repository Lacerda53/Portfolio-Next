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
            {"->"} Desenvolvedor <strong>Mobile na Sofit - Gestão de Frotas</strong>
          </p>
          <p data-aos="fade-left">{"->"} Acadêmico de <strong>Sistemas de Informação</strong></p>
          <p data-aos="fade-left">{"->"} Participante de <strong>Hackathons</strong></p>
        </div>
      </div>
    </section>
  );
}
