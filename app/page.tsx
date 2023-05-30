import { type } from "os";
import Navbar from "./Common/Navbar";
import React, { useState } from "react";
import Homepage from "./Homepage/Homepage";
export default async function Home() {
  return (
    <div>
      <Homepage />
    </div>
  );
}

//

// import React from "react";
// import Homepage from "./Homepage/Homepage";
// import { GetStaticProps, NextPage } from "next";

// type Data = {
//   title: string;
//   id: number;
//   body: string;
// };

// type HomeProps = {
//   data: Data[];
// };

// const Home: NextPage<HomeProps> = ({ data }) => {
//   console.log(data, "dasad");
//   return (
//     <div>
//       <Homepage />
//     </div>
//   );
// };

// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data: Data[] = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

// export default Home;
