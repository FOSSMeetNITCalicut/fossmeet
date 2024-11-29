'use client';

import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import Navbar from "@/components/common/Navbar";
import PageTitle from "@/components/common/PageTitle";
import Footer from "@/components/footer/Footer";
import Head from "next/head";
import styles from "./page.module.css";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Loader from "@/components/Loader";

const Media = () => {
  const [loading, setLoading] = useState(true);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true); 
      try {
        const images = await client.fetch(`*[_type=="gallery_images"]`);
        console.log(images);
        setGalleryImages(images);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); 
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <Head>
        <title>FOSSMeet&apos;24</title>
        <meta name="description" content="FOSS Meet 2023-24" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <PageTitle imageSrc={"/camera.png"} title={"Gallery"} tag={"FOSSMeet'24"} />

      <div className={`${styles.media_body} margin`} style={{ minHeight: "50vh" }}>
        {loading || galleryImages.length === 0 ? (
          <div className={styles.loading}>
            <Loader loading={loading} /> 
          </div>
        ) : (
          <div className={styles.media_gallery}>
            {galleryImages.map((image, i) => (
              <div key={i}>
                <Card img_name={urlForImage(image.image)} />
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Media;
