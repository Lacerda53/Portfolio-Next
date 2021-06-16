import styles from "./toTop.module.scss";
import Image from "next/image";

export function ToTop() {
  return (
    <div className={styles.buttonToTop}>
      <div>
        <a href="#">
          <Image src="/img/Polygon.svg" width={24} height={24} alt="toTop" />
        </a>
      </div>
    </div>
  );
}
