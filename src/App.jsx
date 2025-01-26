import { Routes } from "react-router-dom"
import NavBar from "./components/navbar/NavBar"
import { Route } from "react-router-dom"
import Home from "./components/pages/home/Home"
import Cart from "./components/pages/cart/Cart"
import PlaceOrder from "./components/pages/placeOrder/PlaceOrder"
import Footer from "./components/footer/Footer"
import { useState } from "react"
import LogInPopUp from "./components/login/LogInPopUp"


const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
  {showLogin? <LogInPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className="app">
    <NavBar setShowLogin={setShowLogin}/>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<PlaceOrder />} />
    </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
