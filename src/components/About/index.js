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
            Olá, meu nome é Guiherme Andrade Lacerda, sou desenvolvedor mobile na Sofit - Gestão de Frotas, sou um profissional dedicado,
            que ama o que faz, atualmente cursando o último período do curso de Sistemas de Informação na UNITPAC, estou sempre em busca
            de novos desafios para aprimorar cada vez mais meus conhecimentos, em momentos livres gosto de tocar projetos pessoais, aprender
            features novas e tocar violão.
          </p>
          <p>
            Acredito muito na técnica de aprender ensinando, então curto muito ensinar
            e também to sempre disposto a aprender.
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
