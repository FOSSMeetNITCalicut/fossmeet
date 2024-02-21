import Navbar from '@/components/common/Navbar'
import Footer from '@/components/footer/Footer'

import PageTitle from '@/components/common/PageTitle'
import { client } from '@/sanity/lib/client'
import { Speaker } from '@/sanity/schemas/speaker'
import SpeakerGrid from '../../components/speakers/Grid'
import styles from './page.module.css'

export default async function Page() {
  const speakers = await client.fetch<Speaker[]>(
    `*[_type=="speaker"]`,
    {},
    {
      next: {
        revalidate: 60 * 60 * 24 * 7,
      },
    }
  )
  console.log(speakers)
  return (
    <div className={styles['speaker-container']}>
      <Navbar />
      <PageTitle imageSrc={'./phone.png'} title="Speakers" tag="Renowned" />
      <main>
        <SpeakerGrid speakers={speakers} />
      </main>
      <Footer />
    </div>
  )
}
