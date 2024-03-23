import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LearnProps } from './components/Props/LearnProps';
import Navbar from './components/Navbar';
import { Movie } from './components/Movie/Movie';
import Movies from './components/Movie/MovieData.json'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<LearnProps name="Chandan Kumar Maurya" age={44} address="Pipari Rayan Bhadohi"/>} />
        {/* <div className='flex justify-evenly items-center'> */}
        <Route path="/movie" element={Movies.map((dm)=>{
          return(
            <Movie 
              Title={dm.title}
              Year={dm.year}
              Poster={dm.poster_url}
              className="main"
          />
          );
        })} />
        {/* </div> */}
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
