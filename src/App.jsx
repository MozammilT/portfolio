import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

function App() {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <section className="min-h-screen"></section>
    </div>
  );
}

export default App;
