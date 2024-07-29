import { FaArrowRight } from 'react-icons/fa';
import styles from "./GalleryCard.module.css";

export default function GalleryCard() {
    return (
        <div className={styles['container']}>
            <div className={styles['innerContainer']}>
                <div className={styles['imageContainer']}>
                    <div className={styles['imageRow']}>
                        <img
                            src={'/gallery_images/img-1.jpg'}
                            alt="fossmeet logo"
                            className={styles['image']}
                        />

                        <img
                            src={'/gallery_images/img-2.jpg'}
                            alt="fossmeet logo"
                            className={styles['image']}
                        />

                    </div>
                    <div className={styles['imageRow']}>
                        <img
                            src={'/gallery_images/img-3.jpg'}
                            alt="fossmeet logo"
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
                                    <FaArrowRight />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
