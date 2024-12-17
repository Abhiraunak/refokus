import Cards from "./components/Cards"
import Marques from "./components/Marques"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Stripes from "./components/Stripes"
import Work from "./components/Work"

function App() {
  return (
    <div className="max-w-screen-2xl font-satoshi bg-zinc-900 text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marques />
      <Cards />
    </div>
  )
}

export default App