import styles from "./contact.module.scss";
import Image from "next/image";
import { useState } from "react";

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        apikey: "9fd0df20-8c9f-431d-8214-7e3acca0e7cd",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      e.target.reset();
    }
    setIsLoading(false);
  }

  return (
    <div id="contact" className={styles.containerContact}>
      <div>
        <div>
          <div className="title">
            <h1>CONTATO</h1>
          </div>

          <form onSubmit={handleSubmit}>
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
            <button disabled={isLoading} type="submit">
              ENVIAR
            </button>
          </form>
        </div>
        <div data-aos="zoom-in">
          <Image src="/img/contact.png" width={457} height={413} />
        </div>
      </div>
    </div>
  );
}
