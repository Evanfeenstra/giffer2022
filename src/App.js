import "./App.css";
// import TextFile from Material UI
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";

function App() {
  const [text, setText] = useState("");
  const [gifs, setGifs] = useState([]);
  const [planet, setPlanet] = useState("");

  // "async" means that you can now use the word
  // "await" within this function!
  async function search() {
    const url = `/api/gifs?text=${text}`;
    const r = await fetch(url);
    const j = await r.json();
    setGifs(j.data);
  }

  async function nasaSearch() {
    const key = "hqzoLXHCqJEtiUXdhJfgMyWUvTPHzLv2EZ8OIMDQ";
    const url = `https://images-api.nasa.gov/search?q=${text}`;
    const r = await fetch(url);
    const j = await r.json();
    console.log(j);
    // setPlanet(j.url);
    setGifs(j.collection.items);
  }

  console.log(gifs);
  return (
    <div className="App" style={{ background: `url(${planet})` }}>
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
      <div className="gifs">
        {gifs.map((gif, i) => {
          if (!gif.images) return <span />;
          return <img key={i} src={gif.images.fixed_height.url} />;
        })}
      </div>
    </div>
  );
}

export default App;
