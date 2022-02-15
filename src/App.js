import "./App.css";
// import TextFile from Material UI
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [text, setText] = useState("");

  function search() {}

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
