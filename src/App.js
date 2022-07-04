import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Countries" element={<Countries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
