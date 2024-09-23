
import { Route, Routes } from "react-router"
import Main from "./components/Main/Main"
import Navbar from "./components/Navbar/Navbar"
import Product from "./pages/product"








function App() {


  return (
    <>
    <div className="wraper">
    <Navbar/>
     <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/Products/:id" element={<Product/>} />
     </Routes>
     </div>
    </>
  )
}

export default App
