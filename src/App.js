import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LearnProps } from './components/Props/LearnProps';
import Navbar from './components/Navbar';
import { Movie } from './components/Movie/Movie';
import Movies from './components/Movie/MovieData.json'
import { Effect } from './components/Hooks/Effect';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LearnProps name="Chandan Kumar Maurya" age={44} address="Pipari Rayan Bhadohi"/>} />
        <Route path="/effect" element={<Effect/>} />
        <Route path="/movie" element={Movies.map((element,index)=>{
          return(
            <Movie 
              key={index}
              Title={element.title}
              Year={element.year}
              Poster={element.poster_url}
          />
          );
        })} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
