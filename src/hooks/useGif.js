import React from "react";

import axios from "axios";
import { useEffect, useState } from "react";

//ya url different ha tag ka basic pa url la rha ha

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function useGif(tag) {
  const [gif, setGif] = useState("");

  const [loading, setloading] = useState("false");

  const randomMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const tagMemeurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  async function fetchData(tag) {
    setloading(true);
    //destructurig kiya ha data ko
    const { data } = await axios.get(tag ? tagMemeurl : randomMemeurl);
    const imageSource = data.data.images.downsized_large.url;
    //console.log(output);
    //console.log(imageSource);
    setGif(imageSource);
    setloading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // return muja karvan padaga
  return { gif, loading, fetchData };
}

export default useGif;
