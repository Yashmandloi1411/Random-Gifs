import React, { useEffect, useState } from "react";

import Spinner from "./spinner";

import axios from "axios";

import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {
  // const [gif, setGif] = useState("");

  const [tag, setTag] = useState("");

  // const [loading, setloading] = useState("false");

  // async function fetchData() {
  //   setloading(true);
  //   //ya url different ha tag ka basic pa url la rha ha
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

  //   //destructurig kiya ha data ko
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   //console.log(output);
  //   //console.log(imageSource);
  //   setGif(imageSource);
  //   setloading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // use gif ki call sa ham log niklaga
  const { gif, loading, fetchData } = useGif(tag);

  function clickHandler() {
    console.log("Button clicked, fetching new GIF...");
    fetchData(tag);
  }

  function changeHandler(e) {
    setTag(e.target.value);
  }

  return (
    <div className="w-[400px]  bg-blue-500 rounded-lg mt-10 border border-black flex flex-col items-center">
      <h1 className="text-xl underline font-bold">RANDOM {tag} GIF</h1>

      {loading ? <Spinner /> : <img src={gif} width="250" />}

      <input
        className="w-9/12 mt-2 py-2 rounded-lg  mb-1 text-center"
        type="text"
        onChange={changeHandler}
        value={tag}
      />
      <button
        onClick={clickHandler}
        className="w-9/12 bg-yellow-500 py-2 rounded-lg mt-3 mb-3"
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
