import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import Contact from './components/Contact';
import {BrowserRouter , Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
