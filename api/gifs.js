import * as fetch from "node-fetch";

export default async function gifs(req, res) {
  var key = process.env.KEY;
  var url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${req.query.text}&limit=25&offset=0&lang=en`;

  try {
    var r = await fetch(url);
    var json = await r.json();
    res.status(200).json(json);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
