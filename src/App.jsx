

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Article from "./pages/Article";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

function App() {
  return (
    <BrowserRouter basename="/CyberSheild">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
