import './App.css';
import Header from "./components/Header";
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Welcome from './components/Welcome';
// import PreviewItems from './components/PreviewItems';
import Catalog from './pages/Catalog';
import ViewOneProduct from './components/ViewOneProduct';
import AllProducts from './pages/AllProducts'
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Welcome/>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/catalog' element={<Catalog/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/allProducts' element={<AllProducts />} />
          <Route path='/product/:id' element={<ViewOneProduct />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
