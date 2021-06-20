import { useEffect } from "react";
import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { Welcome } from "../components/Welcome";
import { ToTop } from "../components/ToTop";
import { Work } from "../components/Work";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import { SocialMedia } from "../components/SocialMedia";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <ToTop />
      <Navbar />
      <Welcome />
      <Banner />
      {/* <Work /> */}
      <About />
      <Contact />
      <SocialMedia />
      <Footer />
    </>
  );
}
