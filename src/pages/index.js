import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { Welcome } from "../components/Welcome";
import { Work } from "../components/Work";

export default function Home() {
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
