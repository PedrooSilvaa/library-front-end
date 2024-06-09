import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './App.css';
import Navbar from "./components/Navbar.js";
import SearchBook from "./components/pages/Search/SearchBook.js";
import ListBook from "./components/pages/Books/Books.js";
import InserirBook from "./components/pages/InserirBook/InserirBook.js";
import Home from "./components/pages/Home/Home.js";
import AboutBook from "./components/pages/AboutBook/AboutBook.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/library" element={<ListBook/>}/>

          <Route path="/search" element={<SearchBook />} />

          <Route path="/inserir" element={<InserirBook/>} />

          <Route path="/search/:title/about" element={<AboutBook/>} />

        </Routes>
      </BrowserRouter>
        <h5>Page developed by Pedro Henrique</h5>
    </div>
  );
}

export default App;
