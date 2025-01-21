import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <CartProvider>
            <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
                <App />
            </ClerkProvider>
            </CartProvider>
        </Router>
    </StrictMode>
)
