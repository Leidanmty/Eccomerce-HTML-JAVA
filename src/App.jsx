
import { Container } from 'react-bootstrap'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { NavBar } from './components'
import { Home, Login, Product, Purchases } from './pages'

function App() {
  
  return (
    <HashRouter>
      <NavBar />
      <Container ClassName="mt-5">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </Container>
    </HashRouter>
  )
}

export default App
