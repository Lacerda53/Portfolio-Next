import React from "react";
import styles from "./about.module.scss";
import Image from "next/image";

export function About() {
  const languages = [
    {
      title: "Javascript",
      icon: "/img/javascript.svg",
    },
    {
      title: "C#",
      icon: "/img/csharp.svg",
    },
    {
      title: "Typescript",
      icon: "/img/typescript.svg",
    },
    {
      title: ".NET Core",
      icon: "/img/netcore.svg",
    },
    {
      title: "ReactJs & React Native",
      icon: "/img/react.svg",
    },
    {
      title: "SQL Server",
      icon: "/img/sqlserver.svg",
    },
    {
      title: "Firebase",
      icon: "/img/firebase.svg",
    },
    {
      title: "Git",
      icon: "/img/git.svg",
    },
  ];

  return (
    <div id="about" className={styles.containerAbout}>
      <div data-aos="fade-up" className="title">
        <h1>SOBRE MIM</h1>
      </div>
      <div data-aos="zoom-in" className={styles.circleLarge}></div>
      <div className={styles.circleSmall}></div>
      <div className={styles.rowContainer}>
        <div data-aos="fade-right" >
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
        <div data-aos="fade-left" >
          <h3>Habilidades</h3>
          <div>
            <ul>
              {languages.map((item, index) => (
                <li key={index}>
                  <Image
                    src={item.icon}
                    width={60}
                    height={60}
                    alt={item.title}
                  />
                  <h4>{item.title}</h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
