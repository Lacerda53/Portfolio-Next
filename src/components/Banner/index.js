import React from "react";
import styles from "./banner.module.scss";

export function Banner() {
  return (
    <div className={styles.containerBanner}>
      <div>
        <img src="/img/desktop.png" alt="desktop" />
        <h1>50+</h1>
        <p>Projetos desenvolvidos</p>
      </div>
      <div>
        <img src="/img/wins.png" alt="wins" />
        <h1>7X</h1>
        <p>Premiado em Hackathons</p>
      </div>
      <div>
        <img src="/img/folder.png" alt="folder" />
        <h1>2+</h1>
        <p>Anos de experiência</p>
      </div>
    </div>
  );
}
