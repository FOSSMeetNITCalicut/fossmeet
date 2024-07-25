import Footer from '@/components/footer/Footer'
import Hero from '@/components/hero/Hero'
import Sponsors from '@/components/sponsors/Sponsors'
import WorkshopSection from '@/components/workshops/Section'
import { client } from '@/sanity/lib/client'
import { Speaker } from '@/sanity/schemas/speaker'
import { Workshop } from '@/sanity/schemas/workshop'
import Navbar from '../components/common/Navbar'
import SpeakersSection from '../components/speakers/Section'
import ThanksCard from '@/components/ThanksCard'
import GalleryCard from '@/components/GalleryCard'

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

  if(showThankyou){
    return(
      <div>
        <Navbar />
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '25px',
          marginBottom: '25px'
        }}>
        <ThanksCard />   
        <GalleryCard />
        </div>     
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
