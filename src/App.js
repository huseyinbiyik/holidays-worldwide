import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="country/:id" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
