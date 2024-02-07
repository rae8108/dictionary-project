import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <section>
        <h4>What word do you want to look up?</h4>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus="true"
            placeholder="search"
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint"> suggested words: sunset, forest, hike</div>
      </section>
      <Results results={results} />
    </div>
  );
}
