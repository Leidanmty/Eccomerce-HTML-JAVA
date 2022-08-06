
import { Container } from 'react-bootstrap'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  
  return (
    <HashRouter>
      <Container ClassName="mt-5">
        <Routes>
          <Route path='/' element=""/>
        </Routes>
      </Container>
    </HashRouter>
  )
}

export default App
