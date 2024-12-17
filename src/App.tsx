import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Marques from "./components/Marquees";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Stripes from "./components/Stripes";
import Work from "./components/Work";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="max-w-screen-2xl mx-auto font-satoshi bg-zinc-900 text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marques />
      <Cards />
      <Footer />
    </div>
  )
}

export default App