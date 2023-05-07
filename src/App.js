import logo from './logo.svg';
import './App.css';
import HomePage from './HomePage';
import Contact from './components/Contact';
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Welcome from './components/Welcome';
import PreviewItems from './components/PreviewItems';

function App() {
  return (
    <div className="App">
      <Welcome/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
      <PreviewItems />
    </div>
  );
}

export default App;
