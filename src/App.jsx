import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutMe from "./pages/About-Me.jsx";
import Contact from "./pages/Contact.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Resume from "./pages/Resume.jsx";
import Layout from "./components/Layout.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<AboutMe />} />
              <Route path="about-me" element={<AboutMe />} />
              <Route path="contact" element={<Contact />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="resume" element={<Resume />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
