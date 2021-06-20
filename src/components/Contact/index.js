import styles from "./contact.module.scss";
import Image from "next/image";

export function Contact() {
  const key = "9fd0df20-8c9f-431d-8214-7e3acca0e7cd";

  async function handleSubmit() {
  }

  return (
    <div className={styles.containerContact}>
      <div>
        <div>
          <div className="title">
            <h1>CONTATO</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <input type="hidden" name="apikey" value={key} />
            <div data-aos="fade-left">
              <label htmlFor="">NOME</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Seu nome completo"
              />
            </div>
            <div data-aos="fade-left">
              <label htmlFor="">E-MAIL</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Ex. nome@email.com"
              />
            </div>
            <div data-aos="fade-left">
              <label htmlFor="">MENSAGEM</label>
              <textarea
                name="message"
                id=""
                required
                rows="3"
                placeholder="Escreva sua mensagem aqui"
              ></textarea>
            </div>
            <button type="submit">ENVIAR</button>
          </form>
        </div>
        <div data-aos="zoom-in">
          <Image src="/img/contact.png" width={457} height={413} />
        </div>
      </div>
    </div>
  );
}
