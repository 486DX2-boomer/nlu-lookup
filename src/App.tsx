import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Searchbar from "./components/Searchbar";
import Clearbutton from "./components/Clearbutton";
import NLUList from "./components/NLUList";
import Qrmodal from "./components/Qrmodal";

function App() {

  // Searchbar state
  const [searchString, setSearchString] = useState(null);
  // NLU list state
  const [nlus, setNLUs] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [empty, setEmpty] = useState(false);

  return (
    <div className="App">
      <div className="search-wrapper">
        <Searchbar searchString={searchString} setSearchString={setSearchString}/>
      </div>
      <NLUList nlus={nlus} setNLUs={setNLUs} filtered={filtered} setFiltered={setFiltered} empty={empty} setEmpty={setEmpty} searchString={searchString}/>
      <Qrmodal />
    </div>
  );
}

export default App;
