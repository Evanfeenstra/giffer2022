import "./App.css";
// import TextFile from Material UI
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [text, setText] = useState("");

  // "async" means that you can now use the word
  // "await" within this function!
  async function search() {
    const key = "zT18GDDyLIHam78EfDyGO3yT8Q8IkZZK";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${text}&limit=25&offset=0&lang=en`;
    const r = await fetch(url);
    const j = await r.json();
    console.log(j);
  }

  return (
    <div className="App">
      <div className="searchbar">
        {/*  "outlined" variant prop gives the nice animation */}
        <TextField
          id="search"
          label="Search"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          value={text}
          onKeyPress={(e) => {
            if (e.key === "Enter") search();
          }}
        />
        <Button variant="outlined" onClick={search} size="large">
          Search
        </Button>
      </div>
    </div>
  );
}

export default App;
