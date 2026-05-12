import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trending from "./components/Trending";
import TopSelling from "./components/TopSelling";
import Review from "./components/Review";
import BestO2 from "./components/BestO2";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.78), rgba(0,0,0,0.78)), url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=2070&auto=format&fit=crop')",
      }}
    >
      <Navbar />
      <Hero />
      <Trending />
      <TopSelling />
      <Review />
      <BestO2 />
      <Footer />
    </div>
  );
}

export default App;