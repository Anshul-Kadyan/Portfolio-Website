import { Navbar, Hero, About, Work, Contact } from "./components";

function App() {
  return (
    <div className=" max-w-[1440px] mx-auto ">
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
