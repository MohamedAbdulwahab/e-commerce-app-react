import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main className="py-3">
          <Container>
            <Routes>
              <Route path='/product/:id' element={<ProductScreen />}/>
              <Route path='/' element={<HomeScreen />}/>
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
