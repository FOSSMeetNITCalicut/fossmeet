"use client";
import Card from "@/components/Card";
import Navbar from '@/components/common/Navbar';
import PageTitle from '@/components/common/PageTitle';
import Footer from '@/components/footer/Footer';
import Head from 'next/head';
import styles from "./page.module.css";
import { client } from "@/sanity/lib/client";
import React from "react";
import { urlForImage } from "@/sanity/lib/image";

export async function Media() {

    const galleryImages = await client.fetch(`*[_type=="gallery_images"]`);

    return (
        <div>

            <Head>
                <title>FOSSMeet&apos;24</title>
                <meta name='description' content='FOSS Meet 2023-24' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Navbar />
            <PageTitle imageSrc={'/camera.png'} title={'Gallery'} tag={'FOSSMeet\'24'} />
            <div className={`${styles.media_body} margin`}>
                <div className={styles.media_gallery}>
                    {
                        galleryImages.map((image, i) => {
                            return (
                                <div key={i}>
                                    <Card img_name={urlForImage(image.image)} />
                                </div>)
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Media;

// Ideas: If I cannot use an image modal, we create separate page for image, and add CSS to it.
// https://www.youtube.com/watch?v=P4W_LaotmNI
