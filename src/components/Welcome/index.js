import styles from "./welcome.module.scss";
import Image from "next/image";
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

export function Welcome() {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
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
            Sou <strong>desenvolvedor fullstack</strong>, acadêmico de Sistemas
            de Informação, cursando o 7º período. Atualmente trabalho como
            Auxiliar Administrativo de TI no UNITPAC - Centro Universitário
            Tocantinense Presidente Antônio Carlos.
          </p>
        </div>
      </div>
    </section>
  );
}
