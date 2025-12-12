import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CartApp from './CartApp.jsx'

createRoot(document.getElementById('cart-root')).render(
  <StrictMode>
    <CartApp />
  </StrictMode>,
)
