import "./App.css";
// import TextFile from Material UI
import TextField from "@mui/material/TextField";
import { useState } from "react";

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
      </div>
    </div>
  );
}

export default App;
