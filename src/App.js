import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import HomePage from './pages/HomePage';
import Contact from './pages/Contact';
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Welcome from './components/Welcome';
import PreviewItems from './components/PreviewItems';
import Catalog from './pages/Catalog';
function App() {
  return (
    <div className="App">
      <Welcome/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/catalog' element={<Catalog/>} />
      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
