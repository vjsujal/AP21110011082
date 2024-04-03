import './App.css';
import NavBar from './Components/NavBar/navbar'
import ProductDetail from './Components/ProductPage/productDetail'
import HomePage from './Components/HomePage/homepage'
import ProductSearch from './Components/ProductsSearch/productSearch'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/productSearch/" element={<ProductSearch />} />
            <Route path="/productDetail/:productId" element={<ProductDetail />} />
          </Routes>
          {/* <ProductDetail /> */}
        </div>
    </Router>
  );
}

export default App;
