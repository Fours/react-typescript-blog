import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Layout from "./components/Layout"

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

/*
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
*/

export default App
