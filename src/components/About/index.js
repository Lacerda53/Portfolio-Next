import React from "react";
import styles from "./about.module.scss";

export function About() {
  return (
    <div id="about" className={styles.containerAbout}>
      <div className="title">
        <h1>SOBRE MIM</h1>
      </div>
      <div className={styles.circle}></div>
      <div className={styles.rowContainer}>
        <div>
          <h3>Descrição</h3>
          <p>
            Sou uma pessoa curiosa, sempre que posso quero aprender coisas
            novas. Gosto de usar C# em projetos de backend e Javascript
            (ReactJS) em projetos de frontend, estou sempre buscando aprimorar
            meus conhecimentos e habilidades, sou dedicado, responsável,
            paciente e tenho uma boa comunicação em equipe.
          </p>
          <p>
            Amo aprender e ensinar, procuro sempre compartilhar meus
            conhecimentos com outras pessoas, nas horas vagas escrevo alguns
            artigos no Medium e participo de Hackathons.
          </p>
        </div>
        <div>
          <h3>Habilidades</h3>
        </div>
      </div>
    </div>
  );
}
