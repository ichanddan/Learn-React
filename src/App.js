import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LearnProps } from "./components/Props/LearnProps";
import Navbar from "./components/Navbar";
import { Effect } from "./components/Hooks/Effect";
import Data from "./components/Movie/Data";
import { CompA } from "./components/context/CompA";
import Ref from "./components/Hooks/Ref";

const AppData=createContext();
function App() {
  const[obj,setObj]=useState({id:1,name:"Chandan Kumar Maurya", Addres:"Pipari Rayan Bhadohi 221401", Age:25})
  return (
    <AppData.Provider value={{obj}}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LearnProps name="Chandan Kumar Maurya" age={44} address="Pipari Rayan Bhadohi"  />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/movie" element={<Data />} />
        <Route path="/context" element={<CompA />} />
        <Route path="/ref" element={<Ref />} />
      </Routes>
    </BrowserRouter>
    </AppData.Provider>
  );
}

export default App;
export {AppData};
