import React, { useEffect, useState } from "react";

import Spinner from "./spinner";

import useGif from "../hooks/useGif";

import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random() {
  // const [gif, setGif] = useState("");

  // const [loading, setloading] = useState("false");

  // async function fetchData() {
  //   setloading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  //   //destructurig kiya ha data ko
  //   const { data } = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   //console.log(output);
  //   //console.log(imageSource);
  //   setGif(imageSource);
  //   setloading(false);
  // }

  // use gif ki call sa ham log niklaga
  const { gif, loading, fetchData } = useGif();

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    console.log("Button clicked, fetching new GIF...");
    fetchData();
  }

  return (
    <div className="w-[400px]  bg-green-500 rounded-lg mt-16 border border-black flex flex-col items-center">
      <h1 className="text-xl underline font-bold">A RANDOM GIF</h1>

      {loading ? <Spinner /> : <img src={gif} width="250" />}

      <button
        onClick={clickHandler}
        className="w-9/12 bg-yellow-500 py-2 rounded-lg mt-3 mb-3"
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
