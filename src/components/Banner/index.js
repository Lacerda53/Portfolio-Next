import React from "react";
import styles from "./banner.module.scss";
import Image from "next/image";

export function Banner() {
  return (
    <div className={styles.containerBanner}>
      <div>
        <div>
          <Image
            src="/img/desktop.png"
            alt="desktop"
            width={160}
            height={140}
          />
          <h1>50+</h1>
          <p>Projetos desenvolvidos</p>
        </div>
        <div>
          <Image src="/img/wins.png" alt="wins" width={140} height={140} />
          <h1>7X</h1>
          <p>Premiado em Hackathons</p>
        </div>
        <div>
          <Image src="/img/folder.png" alt="folder" width={160} height={140} />
          <h1>2+</h1>
          <p>Anos de experiência</p>
        </div>
      </div>
    </div>
  );
}
