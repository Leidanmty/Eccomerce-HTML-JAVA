import './App.css'
import { useSelector } from "react-redux";
import { Container } from 'react-bootstrap'
import { NavBar, LoadingScreen, ProtectedRoutes } from "./components";
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home, Login, Product, Purchases } from './pages'

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      <NavBar />
      {isLoading && <LoadingScreen />}
      <Container ClassName="mt-5">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </Container>
    </HashRouter>
  )
}

export default App
