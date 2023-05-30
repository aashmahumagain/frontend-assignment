"use client";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import ReleaseProducts from "./ReleaseProducts/page";
import { Latestrelease } from "@/api/MusicListApis";
export default function Homepage() {
  return (
    <div>
      <Row>
        <Col span={12}>
          <div className="underline decoration-sky-500/30 text-3xl text-center my-1 font-bold">
            The pleasure of Music
          </div>
          <div className="text-center  ">
            <p className="sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#646663] p-2.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              elementum turpis lorem, et volutpat mauris tempor pellentesque.
              Vivamus in sem tortor. Quisque sed nulla sed dui consequat
              ultrices eget in tellus. Vivamus eu urna justo. Ut hendrerit
              ornare est eu viverra. Nunc iaculis placerat eleifend.
            </p>
          </div>

          <div className="m-6 flex items-center">
            <Link href="/album">
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Our Albums
              </button>
            </Link>
            <Link href="/details">
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Search Your Favourites
              </button>
            </Link>
          </div>
        </Col>

        <Col span={12}>
          <Image src="/images/music.png" alt="myimg" width={1000} height={50} />
        </Col>
      </Row>

      <h1 className="m-4 latest-release text-3xl font-bold text-center animate-pulsate animate-float-rotate">
        Latest Release
      </h1>

      <div className="ml-6">
        <Row>
          <ReleaseProducts />
        </Row>
      </div>
    </div>
  );
}
