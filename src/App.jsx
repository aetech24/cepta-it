import { Routes, Route } from 'react-router-dom'
import Nav from './components/nav'
import Footer from './components/footer'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Layout from './components/Layout'
import WishlistProvider from './context/WishlistContext'
import { CartProvider } from './context/CartContext'


function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <div className="flex flex-col min-h-screen w-[100%]">
          <Nav />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Layout>
          <Footer />
        </div>
      </CartProvider>
    </WishlistProvider>
  )
}

export default App
