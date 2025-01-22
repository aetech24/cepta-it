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
import Search from './pages/Search'
import { ClerkProvider } from '@clerk/clerk-react'
import MobileViewIconsBottom from './components/MobileViewIconsBottom'
import ScrollToTop from './components/ScrollToTop'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <WishlistProvider>
        <CartProvider>
          <div className="flex flex-col min-h-screen w-[100%] relative">
            <Nav />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/search" element={<Search />} />
              </Routes>
            </Layout>
            <Footer />
            <MobileViewIconsBottom/> 
          </div>
        </CartProvider>
      </WishlistProvider>
      <ScrollToTop />
    </ClerkProvider>
  )
}

export default App
