import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer2 from "./components/Footer2";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit} />
      {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    Edit <code>src/particles.json</code> to customize Particles, then save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <a
                    className="App-link"
                    href="https://particles.js.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See Particles samples
                </a>
            </header> */}
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer2 />
    </div>
  );
}

export default App;
