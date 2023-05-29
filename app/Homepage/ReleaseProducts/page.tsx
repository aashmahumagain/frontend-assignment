import { Latestrelease } from "@/api/MusicListApis";
import { Album } from "@/collection";
import { Card, Col, Image, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import loadingimg from "../../../public/images/loadinimg.png";
const { Meta } = Card;

export default function ReleaseProducts() {
  const [datas, setDatas] = useState<Album[] | null>(null);
  const [albumselect, setAlbumSelect] = useState<string>("");
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState<boolean>(true); // Set initial loading state to true

  const handleClick = (item: Album) => {
    console.log(item.title);
    setSelectedAlbum(item);
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    setLoading(true);
    Latestrelease()
      .then((data) => {
        setDatas(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <h2 className="text-center text-3xl text-red-500">
          Loading please wait...
        </h2>
      </div>
    );
  }

  if (datas === null) {
    return null;
  }

  const filteredAlbums = albumselect
    ? datas.filter((item) => item.title === albumselect)
    : datas;
  const firstTenAlbums = filteredAlbums.slice(0, 8);
  return (
    <>
      <Row gutter={12}>
        {firstTenAlbums?.map((item) => (
          <Col key={item.key} xs={24} sm={12} md={6}>
            <Card
              onClick={() => handleClick(item)}
              hoverable
              style={{ margin: 20 }}
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
            <img
              src={selectedAlbum.images.background}
              alt={selectedAlbum.title}
            />
            <h3 className="text-2xl">Name: {selectedAlbum.share.text}</h3>
            <p className="text-red">
              Release Date and tracklist are not available in this API.
            </p>
          </div>
        )}
      </Modal>
    </>
  );
}
