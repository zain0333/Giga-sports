import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingAICoach from "./components/FloatingAICoach";
import AchievementModal from "./components/AchievementModal";
import SpinAndWinModal from "./components/SpinAndWinModal";
import { AchievementProvider } from "./context/AchievementContext";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Compare from "./pages/Compare";
import AICoach from "./pages/AICoach";
import Bundles from "./pages/Bundles";
import GearShowcase360 from "./pages/GearShowcase360";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {
  return (
    <AchievementProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products />} />

          <Route path="/products/:id" element={<ProductDetails />} />

          <Route path="/bundles" element={<Bundles />} />

          <Route path="/showcase-360" element={<GearShowcase360 />} />

          <Route path="/compare" element={<Compare />} />

          <Route path="/ai-coach" element={<AICoach />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/order-confirmation" element={<OrderConfirmation />} />
        </Routes>

        <AchievementModal />

        <SpinAndWinModal />

        <FloatingAICoach />

        <Footer />
      </BrowserRouter>
    </AchievementProvider>
  );
}

export default App;

