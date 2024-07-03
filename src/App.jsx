import "./App.css";
import Asked from "./components/Asked/Asked";
import Contact from "./components/Contact/Contact";
import Extension from "./components/Extension/Extrension";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />

      <main className="_main">
        <Hero />
        <Features />
        <Extension />
        <Asked />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
