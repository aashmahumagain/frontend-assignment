"use client";
import { Latestrelease } from "@/api/MusicListApis";
import { Album } from "@/collection";
import { Card, Col, Modal, Pagination, Row } from "antd";
import Meta from "antd/es/card/Meta";
import { ChangeEvent, useEffect, useState } from "react";
export default function Page() {
  const [datas, setDatas] = useState<Album[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [enteredText, setEnteredText] = useState<string>("");
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  const itemsPerPage = 8;

  const handleClick = (item: Album) => {
    console.log(item.title);
    setSelectedAlbum(item);
    setIsModalVisible(true);
  };
  useEffect(() => {
    setLoading(true);
    Latestrelease()
      .then((data) => {
        setDatas(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (datas === null) {
    return null;
  }

  if (loading) {
    return (
      <div>
        <h2 className="text-center text-3xl text-red-500">
          Loading please wait...
        </h2>
      </div>
    );
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
  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div>
        <form>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative ">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white-500 
                
                
                
                text-white-400"
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
              style={{ width: "25%" }}
              type="search"
              id="default-search"
              className="m-2 block w-full p-4 pl-10 text-sm text-white-900 border  rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:placeholder-gray-400"
              placeholder="Search Here..."
              required
              onChange={handleSearch}
            />
          </div>
        </form>
      </div>

      <Row gutter={12}>
        {currentItems.map((item) => (
          <Col key={item.key} xs={24} sm={12} md={6}>
            <Card
              hoverable
              style={{ margin: 20 }}
              onClick={() => handleClick(item)}
              cover={<img alt="example" src={item.images.background} />}
            >
              <Meta title={item.title} description={item.share.text} />
            </Card>
          </Col>
        ))}
      </Row>

      <Modal
        title={selectedAlbum?.title}
        visible={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        centered
      >
        {selectedAlbum && (
          <div>
            <img src={selectedAlbum.images.background} />
            <h3 className="text-2xl">Name:{selectedAlbum.share.text}</h3>
            <p className="text-red">
              Release Date and tracklist is not available in this api
            </p>
          </div>
        )}
      </Modal>
      <Pagination
        current={currentPage}
        pageSize={itemsPerPage}
        total={filteredData?.length}
        onChange={handlePageChange}
        style={{ margin: 20, textAlign: "center" }}
      />
    </>
  );
}
