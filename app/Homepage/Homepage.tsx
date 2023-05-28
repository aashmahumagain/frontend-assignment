"use client";
import React, { useEffect, useState } from "react";

export default function Homepage() {
  const [data, setData] = useState();
  const url =
    "https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5";
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d3ed261c75mshacb6c158aae266bp13a6f8jsn71f5511026c3",
        "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response.albums.items);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <div>Enter</div>;
}
