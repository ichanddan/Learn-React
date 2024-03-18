import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Badla from './components/logInSignup';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Badla/>} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
