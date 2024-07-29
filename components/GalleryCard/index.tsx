import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import styles from "./GalleryCard.module.css";

export default function GalleryCard() {
    return (
        <div className={styles['container']}>
            <div className={styles['innerContainer']}>
                <div className={styles['imageContainer']}>
                    <div className={styles['imageRow']}>
                        <img
                            src={'/gallery_images/img-31.jpg'}
                            alt="fossmeet logo"
                            className={styles['image']}
                        />

                        <img
                            src={'/gallery_images/img-32.jpg'}
                            alt="fossmeet logo"
                            className={styles['image']}
                        />

                    </div>
                    <div className={styles['imageRow']}>
                        <img
                            src={'/gallery_images/img-33.jpg'}
                            alt="fossmeet logo"
                            className={styles['image']}
                        />

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
                </div>
            </div>
        </div>
    )
}
