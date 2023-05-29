"use client";
import { Latestrelease } from "@/api/MusicListApis";
import { Card, Col, Row } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { MouseEvent, useEffect, useState } from "react";
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

export default function ReleaseProducts() {
  const [datas, setDatas] = useState<Album[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [albumselect, setAlbumSelect] = useState<string>("");
  const router = useRouter();

  const handleClick = (item: Album) => {
    console.log(item, "i am an item");
    router.push("/album");
    // router.push({
    //   pathname: '/album',
    //   query: { albumselect: item.title },
    // });
  };

  useEffect(() => {
    Latestrelease()
      .then((data) => {
        setDatas(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <h1 className="text-3xl text-center text-red ">Loading Please wait...</h1>
    );
  }
  if (datas === null) {
    return null;
  }

  return (
    <>
      <>
        <Link
          href={{
            pathname: "/album",
            // query: { item: `${item.title}` }, // the data
          }}
        >
          <Row>
            {datas?.map((item) => (
              <Col key={item.key} span={6}>
                <Card
                  onClick={() => handleClick(item)}
                  hoverable
                  style={{ width: 240, marginBottom: 20 }}
                  cover={<img alt="example" src={item.images.coverart} />}
                >
                  <Meta title={item.title} description={item.share.text} />
                </Card>
              </Col>
            ))}
          </Row>
        </Link>
      </>
    </>
  );
}
