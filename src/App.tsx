import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Project } from './components/Projects';
import { AboutMe } from './components/AboutMe';
import { Skills } from "./components/Skills"
import { Certificates } from "./components/Certificates"
import { Footer } from "./components/Footer"




function App() {

  return (

    <>

      <Navbar />
      <Home />
      <Project />
      <Skills />
      <AboutMe />
      <Certificates />
      <Footer />

    </>

  )

}

export default App
