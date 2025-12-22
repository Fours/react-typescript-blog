import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Authors from "./pages/Authors"
import Post from "./pages/Post"

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="authors" element={<Authors />} />
                <Route path="post" element={<Post />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
