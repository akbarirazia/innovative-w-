import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const pageRoutes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/contact", element: <Contact /> },
  ]

  const renderedRoutes = pageRoutes.map((page, index) => {
    return <Route path={page.path} element={page.element} key={index} />
  })
  return (
    <>
      <Router>
        <Navbar />
        <Routes>{renderedRoutes}</Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
