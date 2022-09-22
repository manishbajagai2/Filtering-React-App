import { useState, useRef } from "react";
import "./App.css";
import CardsFromLocal from "./components/CardsFromLocal";

import filteredIcon from "./assets/filter.png";
import CardsFromApi from "./components/CardsFromApi";

function App() {
  const [query, setQuery] = useState("");
  const inputText = useRef();

  function handleClearButton() {
    inputText.current.value = null;
    setQuery("");
  }

  return (
    <div className="App">
      <div className="search-box">
        <input
          type="text"
          ref={inputText}
          placeholder="Search..."
          className="search-bar"
          onChange={(e) =>
            setQuery(e.target.value.toLowerCase().replace(/ /g, ""))
          }
        />
        <button style={{ marginLeft: "5px" }} onClick={handleClearButton}>
          <img src={filteredIcon} width="40" height="40" alt="clear filter" />
        </button>
      </div>
      <CardsFromApi queryVal={query} />
      <CardsFromLocal queryVal={query} />
    </div>
  );
}

export default App;
