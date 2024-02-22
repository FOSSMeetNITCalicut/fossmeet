import PageTitle from '@/components/common/PageTitle'

import Navbar from '@/components/common/Navbar'
import Footer from '@/components/footer/Footer'

import WorkshopGrid from '@/components/workshops/Grid'
import { client } from '@/sanity/lib/client'
import { Workshop } from '@/sanity/schemas/workshop'
import styles from '../speakers/page.module.css'

export default async function Page() {
  const workshops = await client.fetch<Workshop[]>(
    `*[_type=="workshop"]`,
    {},
    {
      next: {
        revalidate: parseInt(process.env.REVALIDATE_TIME),
      },
    }
  )
  return (
    <div className={styles['workshop-container']}>
      <Navbar />
      <PageTitle imageSrc="/pencil.png" title="Workshops" tag="Educational" />
      <main>
        <WorkshopGrid workshops={workshops} />
      </main>
      <Footer />
    </div>
  )
}
