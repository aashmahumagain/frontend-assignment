"use client";
import { DetailsRelease, Latestrelease } from "@/api/MusicListApis";
import { Card, Col, Pagination, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { ChangeEvent, useEffect, useState } from "react";
type Album = {
  artists: Artist[];
  images: TrackImages;
  key: string;
  layout: string;
  subtitle: string;
  title: string;
  share: Share;
  url: string;
};
type Artist = {
  adamid: string;
  id: string;
};
export interface TrackImages {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}
export interface Share {
  avatar?: string;
  href: string;
  html: string;
  image: string;
  snapchat: string;
  subject: string;
  text: string;
  twitter: string;
}
export default function Page() {
  const [datas, setDatas] = useState<Album[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [enteredText, setEnteredText] = useState<string>("");
  const itemsPerPage = 8;

  useEffect(() => {
    Latestrelease()
      .then((data) => {
        setDatas(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (datas === null) {
    return null;
  }

  const filteredData = enteredText
    ? datas.filter((item) =>
        item.title.toLowerCase().includes(enteredText.toLowerCase())
      )
    : datas;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const enteredText = e.target.value;
    setEnteredText(enteredText);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems: Album[] = filteredData.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <>
      <div>
        <form>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Here..."
              required
              onChange={handleSearch}
            />
          </div>
        </form>
      </div>

      <Row>
        {currentItems.map((item) => (
          <Col key={item.key} span={6}>
            <Card
              hoverable
              style={{ width: 240, margin: 20 }}
              cover={<img alt="example" src={item.images.coverart} />}
            >
              <Meta title={item.title} description={item.share.text} />
            </Card>
          </Col>
        ))}
      </Row>
      <Pagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={filteredData.length}
        onChange={handlePageChange}
        style={{ marginTop: 20, textAlign: "center" }}
      />
    </>
  );
}
