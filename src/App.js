import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LearnProps } from "./components/Props/LearnProps";
import Navbar from "./components/Navbar";
import { Effect } from "./components/Hooks/Effect";
import Data from "./components/Movie/Data";
import { CompA } from "./components/context/CompA";

function App() {
  const[data,setData]=useState('Hi Baby')
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LearnProps name="Chandan Kumar Maurya" age={44} address="Pipari Rayan Bhadohi"  />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/movie" element={<Data />} />
        <Route path="/context" element={<CompA name={data}/>} />
      </Routes>
      <button onClick={()=>{setData(data+"Doll")}}>Click me</button>
    </BrowserRouter>
  );
}

export default App;
