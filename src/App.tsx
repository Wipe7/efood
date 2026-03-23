import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { GlobalStyle } from './styles/global'
import Cart from './components/Cart'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
