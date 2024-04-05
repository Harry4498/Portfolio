import "./App.css";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Skills from "./component/Skills";
import About from "./component/About";
import Work from "./component/Work";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Skills />
      <About/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
