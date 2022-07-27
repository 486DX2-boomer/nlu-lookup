import "./App.css";
import { useState } from "react";
// import { useEffect } from "react";
import Searchbar from "./components/Searchbar";
import Clearbutton from "./components/Clearbutton";
import NLUList from "./components/NLUList";

function App() {

  return (
    <div className="App">
      <div className="search-wrapper">
        <Searchbar />
        <Clearbutton />
      </div>
      <NLUList />
    </div>
  );
}

export default App;
