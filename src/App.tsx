import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Navbar as NavbarBs } from "react-bootstrap";
import Home from "./pages/Home";
import About from "./pages/About";
import { Store } from "./pages/Store";
import { Navbar } from "./components/NavBar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
