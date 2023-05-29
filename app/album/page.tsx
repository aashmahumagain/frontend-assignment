"use client";
import { Latestrelease } from "@/api/MusicListApis";
import { Card, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
const { Meta } = Card;
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
  const router = useRouter();
  const albumselect = router;
  console.log(albumselect, "albumselects");
  const [datas, setDatas] = useState<Album[] | null>(null);
  useEffect(() => {
    Latestrelease()
      .then((data) => {
        setDatas(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  if (datas === null) {
    return null;
  }

  return (
    <>
      <Row>
        {datas?.map((item) => (
          <Col key={item.key} span={6}>
            <Card
              hoverable
              style={{ width: 240, marginBottom: 20 }}
              cover={<img alt="example" src={item.images.coverart} />}
            >
              <Meta title={item.title} description={item.share.text} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}
