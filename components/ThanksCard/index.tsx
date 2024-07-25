
import React from 'react';
import styles from './ThanksCard.module.css';
import Image from 'next/image';


export default function ThanksCard(){
    return(
        <div className={styles['outerBox']}>
            <div className={styles['innerBox']}>
            <div className={styles['headerBox']}>
                <Image 
                    src={'/logo2.jpeg'}
                    alt="fossmeet logo"
                    width={25}
                    height={25}
                    className={styles['logo']}
                />
                <h1 className={styles['heading']}>FOSSMeet&apos;24</h1>
            </div>
            <div className={styles['contentBox']}>
                <div className={styles['content']}>
                    <p className={styles['contentText']}>Thank You!</p>
                    <p className={styles['contentSubText']}>For Making FOSSMeet&apos;24 a huge success.</p>
                </div>
            </div>
            </div>
        </div>
    )
}