import { type } from "os";
import Navbar from "./Common/Navbar";
import React, { useState } from "react";
import Homepage from "./Homepage/Homepage";
type Repository = {
  id: number;
  name: string;
  full_name: string;
};
export default async function Home() {
  console.log("i am loading");
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const data: Repository = await res.json();
  return (
    <div>
      {/* <p>{data.full_name}</p> */}
      <Homepage />
    </div>
  );
}
