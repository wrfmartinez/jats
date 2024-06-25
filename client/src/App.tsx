import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="relative">
      <Nav />
      <Hero />

      <img
        className="absolute top-[-180px] opacity-15 -z-20 sm:top-[-500px] sm:left-[-250px] lg: opacity-30"
        src="../public/orangeshadow.svg"
        alt="orangeshadow"
      />
      <img
        className="hidden absolute top-[-180px] opacity-15 -z-20 lg:block lg:inset-y-[500px] lg:left-[-250px] lg:opacity-19"
        src="../public/orangeshadow.svg"
        alt="orangeshadow"
      />
    </div>
  );
}

export default App;
