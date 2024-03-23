import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LearnProps } from './components/Props/LearnProps';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LearnProps name="Chandan Kumar Maurya" age={44} address="Pipari Rayan Bhadohi"/>} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
