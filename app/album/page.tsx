"use client";
import { Latestrelease } from "@/api/MusicListApis";
import { Card, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Album } from "@/collection";
const { Meta } = Card;
type PageProps = {
  albums: Album | null;
};

export default function Page(props: PageProps) {
  const { albums } = props;
  if (albums === null) {
    return null;
  }

  console.log(albums, "albumspassgarekopage ko");

  const [datas, setDatas] = useState<Album[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  //   setDatas(albums);
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
  return (
    <>
      <h3 className="text-3xl text-center latest-release m-6 font-bold animate-pulsate animate-float-rotate">
        Our Albums
      </h3>
      <Row>
        {datas.map((item) => (
          <Col key={item?.key} span={6}>
            <Card
              hoverable
              style={{ width: 240, margin: 20 }}
              cover={<img alt="example" src={item?.images.background} />}
            >
              <Meta title={item.title} description={item.subtitle} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
