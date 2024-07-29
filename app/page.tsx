import Footer from '@/components/footer/Footer'
import GalleryCard from '@/components/GalleryCard'
import Hero from '@/components/hero/Hero'
import Sponsors from '@/components/sponsors/Sponsors'
import ThanksCard from '@/components/ThanksCard'
import Navbar from '../components/common/Navbar'
import styles from './page.module.css'

export default async function Home() {
  const showThankyou = true;
  // const speakers = await client.fetch<Speaker[]>(
  //   `*[_type=="speaker"]`,
  //   {},
  //   {
  //     next: {
  //       revalidate: parseInt(process.env.REVALIDATE_TIME),
  //     },
  //   }
  // )

  // const workshops = await client.fetch<Workshop[]>(
  //   `*[_type=="workshop"]`,
  //   {},
  //   {
  //     next: {
  //       revalidate: parseInt(process.env.REVALIDATE_TIME),
  //     },
  //   }
  // )

  if (showThankyou) {
    return (
      <div>
        <Navbar />
        <div className={styles['thanks-gallery-wrapper']}>
          <ThanksCard />
          <GalleryCard />
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="section-spacer"></div>
      {/* <SpeakersSection speakers={speakers} /> */}
      <div className="section-spacer"></div>
      {/* <WorkshopSection workshops={workshops} /> */}
      <div className="section-spacer"></div>
      <Sponsors />
      <div className="section-spacer"></div>
      <Footer />
    </div>
  )
}
