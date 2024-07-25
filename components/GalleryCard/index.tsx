import React from 'react';
import styles from "./GalleryCard.module.css";
import Image from 'next/image';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa';

export default function GalleryCard() {
    return (
        <div className={styles['container']}>
            <div className={styles['innerContainer']}>
                <div className={styles['imageContainer']}>
                    <div className={styles['imageRow']}>
                        <Image
                            src={'https://next.fosscell.org/index.php/apps/files_sharing/publicpreview/QriJWGmeJjjSrap?file=/Day1/2G2A8482.JPG&fileId=19295&x=1920&y=1080&a=true&etag=4db67a5ddccc4e2498961fbc9f75f305'}
                            alt="fossmeet logo"
                            width={100}
                            height={100}
                            className={styles['image']}
                        />
                        <Image
                            src={'https://next.fosscell.org/index.php/apps/files_sharing/publicpreview/QriJWGmeJjjSrap?file=/Day2/2G2A8601.JPG&fileId=20331&x=1920&y=1080&a=true&etag=d9f15d10a6e1d33d3ba89385ee5f9ce1'}
                            alt="fossmeet logo"
                            width={100}
                            height={100}
                            className={styles['image']}
                        />
                    </div>
                    <div className={styles['imageRow']}>
                        <Image
                            src={"https://next.fosscell.org/index.php/apps/files_sharing/publicpreview/QriJWGmeJjjSrap?file=/Day2/2G2A8677.JPG&fileId=20095&x=1920&y=1080&a=true&etag=7ad1ad33d4078003f1306822301fa993"}
                            alt="fossmeet logo"
                            width={100}
                            height={100}
                            className={styles['image']}
                        />
                        <div className={styles['viewMore']}>
                            <div className={styles['viewMoreText']}>
                                <span>VISIT</span>
                                <span>FOSSMeeT&apos;24</span>
                                <span style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    gap: '5px'
                                }}>GALLERY
                                    <FaArrowRight/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
