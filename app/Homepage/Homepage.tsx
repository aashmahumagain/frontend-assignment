"use client";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";
import ReleaseProducts from "./ReleaseProducts/page";
export default function Homepage() {
  return (
    <div>
      <Row>
        <Col span={12}>
          <div className="underline decoration-sky-500/30 text-3xl text-center my-1 font-bold">
            The pleasure of Music
          </div>
          <div className="text-2xl text-center scroll-pl-6 leading-8 ">
            <p className="text-[#646663] p-2.5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              elementum turpis lorem, et volutpat mauris tempor pellentesque.
              Vivamus in sem tortor. Quisque sed nulla sed dui consequat
              ultrices eget in tellus. Vivamus eu urna justo. Ut hendrerit
              ornare est eu viverra. Nunc iaculis placerat eleifend.
            </p>
          </div>
          <div className="m-6 grid gap-3 grid-cols-3 grid-rows-3">
            <Link href="/details">
              <button
                type="button"
                className="text-white bg-gray-800 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Our Albums
              </button>
            </Link>
            <Link href="/search">
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

      <div className="underline decoration-sky-500/30 text-3xl text-center my-10 font-bold">
        Latest Release
      </div>
      <div className="ml-6">
        <Row>
          <ReleaseProducts />
        </Row>
      </div>
    </div>
  );
}
