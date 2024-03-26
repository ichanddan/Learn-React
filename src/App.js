import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LearnProps } from './components/Props/LearnProps';
import Navbar from './components/Navbar';
import { Effect } from './components/Hooks/Effect';
import Data from './components/Movie/Data';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LearnProps name="Chandan Kumar Maurya" age={44} address="Pipari Rayan Bhadohi"/>} />
        <Route path="/effect" element={<Effect/>} />
        <Route path="/movie" element={<Data/>} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
