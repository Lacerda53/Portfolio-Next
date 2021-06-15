import { useEffect } from "react";
import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { Welcome } from "../components/Welcome";
import { Work } from "../components/Work";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <>
      <Navbar />
      <Welcome />
      <Banner />
      {/* <Work /> */}
      <About />
    </>
  );
}
