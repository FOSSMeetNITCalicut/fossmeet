'use client';

import Loader from "@/components/Loader";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { FaArrowRight } from 'react-icons/fa';
import styles from "./GalleryCard.module.css";



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
        <div className={styles['container']}>

            <div className={styles['innerContainer']}>
                <div className={styles['imageContainer']}>
                    {loading || galleryImages.length === 0 ? (
                        <div className={styles.loading}>
                            <Loader loading={loading} />
                        </div>
                    ) : (
                        <>
                            <div className={styles['imageRow']}>

                                {galleryImages.length > 30 && (
                                    <img
                                        src={urlForImage(galleryImages.find(item => item.title === "img-3").image)}
                                        className={styles['image']}
                                        alt="Gallery Image"
                                    />
                                )}

                                {galleryImages.length > 30 && (
                                    <img
                                        src={urlForImage(galleryImages.find(item => item.title === "img-32").image)}
                                        className={styles['image']}
                                        alt="Gallery Image"
                                    />
                                )}



                            </div>
                            <div className={styles['imageRow']}>


                                {galleryImages.length > 30 && (
                                    <img
                                        src={urlForImage(galleryImages.find(item => item.title === "img-33").image)}
                                        className={styles['image']}
                                        alt="Gallery Image"
                                    />
                                )}

                                <Link className={styles['viewMore']} href={`/gallery`}>
                                    <div className={styles['viewMoreText']}>
                                        <span>VISIT</span>
                                        <span>FOSSMeeT&apos;24</span>
                                        <span style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flexDirection: 'row',
                                            gap: '5px'
                                        }}>GALLERY
                                            <FaArrowRight />
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Media;

