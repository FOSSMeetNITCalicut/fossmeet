"use client";

import Card from "@/components/Card";
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/footer/Footer';
import Modal from "@/components/Modal";
import Head from 'next/head';
import { useState } from "react";
import styles from "./page.module.css";

let images = [
    'img-31.jpg',
    'img-32.jpg',
    'img-33.jpg',
    'img-1.jpg',
    'img-4.jpg',
    'img-5.jpg',
    'img-30.jpg',
    'img-6.jpg',
    'img-7.jpg',
    'img-8.jpg',
    'img-9.jpg',
    'img-10.jpg',
    'img-11.jpg',
    'img-12.jpg',
    'img-13.jpg',
    'img-14.jpg',
    'img-15.jpg',
    'img-17.jpg',
    'img-18.jpg',
    'img-19.jpg',
    'img-20.jpg',
    'img-21.jpg',
    'img-22.jpg',
    'img-23.jpg',
    'img-24.jpg',
    'img-25.jpg',
    'img-26.jpg',
    'img-29.jpg',
]

const Media = () => {
    // let router = useRouter();
    let [img, setImage] = useState('')
    return (
        <div>

            <Head>
                <title>FOSSMeet&apos;24</title>
                <meta name='description' content='FOSS Meet 2022-23' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            {/* <Banner title="Gallery" subtitle="FOSSMeet'23 in Pictures" image="" /> */}

            <Navbar />
            <div className={`${styles.media_body} margin`}>
                <div className={styles.media_gallery}>
                    {images.map((image, i) => {
                        return (
                            <div onClick={() => setImage(image)} key={i}>
                                <Card img_name={image} />
                            </div>)
                    })}
                </div>
            </div>

            {img != '' &&
                <div className={styles['modal-container']}>
                    <div onClick={() => setImage('')} onScroll={() => setImage('')}>
                        <Modal img_name={img} />
                    </div>
                </div>}
            <Footer />
        </div>
    );
};

export default Media;

// Ideas: If I cannot use an image modal, we create separate page for image, and add CSS to it.
// https://www.youtube.com/watch?v=P4W_LaotmNI
