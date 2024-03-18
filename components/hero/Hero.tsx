'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <div className={styles['hero']}>
      <div className={styles['container']}>
        <div className={styles['left']}>
          <h1>FOSSMeet&apos;24</h1>
          <div className={styles['items-wrapper']}>
            <div className={styles['item']}>
              <div className={styles['circle']}>
                <img src="/location.svg" alt="Location" />
              </div>
              <span className={styles['item-text']}>NIT Calicut</span>
            </div>
            <div className={styles['item']}>
              <div className={styles['circle']}>
                <img src="/Calendar.svg" alt="Location" />
              </div>
              <span className={styles['item-text']}>Mar 22, 23, 24</span>
            </div>
          </div>
          <Link href={'https://www.townscript.com/e/fossmeet24-022332'}>
            <button className={styles['cta-button']} disabled>
              <span>Registration Closed</span>
              <img src="/arrow_right_alt.svg" alt="register link" />
            </button>
          </Link>
        </div>
        <Image
          src="/hero.svg"
          alt="hero"
          className={styles['hero-image']}
          width={1000}
          height={500}
          priority
        />
      </div>
    </div>
  )
}
