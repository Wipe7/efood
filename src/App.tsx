import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import { CartProvider } from './contexts/CartContext'
import Cart from './components/Cart'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyle />
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
