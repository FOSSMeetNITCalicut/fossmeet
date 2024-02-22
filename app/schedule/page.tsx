import Navbar from '@/components/common/Navbar'
import Footer from '@/components/footer/Footer'
import SchedulePage from '@/components/schedule/SchedulePage'
import { client } from '@/sanity/lib/client'
import { Schedule } from '@/sanity/schemas/schedule'

export default async function Page() {
  const schedule = await client.fetch<Schedule>(
    `*[_type == "schedule"]{
        ...,
        events[]{
          ...,
          workshop->,
          speaker->
        }
    }
    `,
    {},
    {
      next: {
        revalidate: parseInt(process.env.REVALIDATE_TIME),
      },
    }
  )
  return (
    <div className="Page bg-white font-semibold">
      <Navbar />
      <SchedulePage schedule={schedule} />
      <Footer />
    </div>
  )
}
