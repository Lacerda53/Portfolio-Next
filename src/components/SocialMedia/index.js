import styles from "./socialMedia.module.scss";
import { FaWhatsapp, FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

export function SocialMedia() {
  return (
    <div className={styles.containerSocialMedia}>
      <div data-aos="fade-up">
        <h1 className="title">REDES SOCIAIS</h1>
        <div>
          {/* <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5594992643424">
            <FaWhatsapp size={30} />
          </a> */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/lacerda53"
          >
            <FaGithub size={30} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/lacerda53/"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://lacerda53.medium.com/"
          >
            <FaMedium size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}
