'use client'
import TimeCardv3 from '@/components/schedule/TimeCardv3'
import TimeCardv4 from '@/components/schedule/TimeCardv4'
import { urlForImage } from '@/sanity/lib/image'
import { Schedule } from '@/sanity/schemas/schedule'
import { useState } from 'react'
import PageTitle from '../common/PageTitle'

const SchedulePage = ({ schedule }: { schedule: Schedule }) => {
  const [tabNo, setTabno] = useState(1)

  const day1Arr = []
  const day2Arr = []
  const day3Arr = []

  const map = {
    '2024-03-22': day1Arr,
    '2024-03-23': day2Arr,
    '2024-03-24': day3Arr,
  }

  for (const x of schedule) {
    for (const y of x.events) {
      if (y.type == 'speaker') {
        map[x.date].push({
          Img: true,
          eventName: y.title,
          time: y.time,
          speaker: y.speaker.name,
          img: urlForImage(y.speaker.image),
          color: 'green',
        })
      } else if (y.type == 'workshop') {
        map[x.date].push({
          Img: true,
          eventName: y.title,
          time: y.time,
          speaker: y.workshop.name,
          img: urlForImage(y.workshop.image),
          color: 'blue',
        })
      } else {
        map[x.date].push({
          noImg: true,
          eventName: y.title,
          time: y.time,
        })
      }
    }
  }

  const infoDay = [day1Arr, day2Arr, day3Arr]

  return (
    <div className="schedulePage h-full font-inter">
      <PageTitle imageSrc={'/clock.png'} title={'Schedule'} tag={'Event'} />

      <div
        className="timeline 
                        h-4/5
                        flex flex-col 
                        items-center 
        "
      >
        <div
          className="timelineButtons
                            bg-white
                            h-14
                            mt-10 
                            w-11/12 md:w-1/2
                            border-2 border-black divide-x-2 divide-black
                            flex
                            font-inter
            "
        >
          <div
            className={`btn1
                                w-1/3
                                flex items-center justify-center
                                md:flex-row
                                flex-col
                                md:gap-2
                                
                                ${
                                  tabNo == 0
                                    ? 'text-white bg-black '
                                    : 'hover:bg-orange-200 cursor-pointer'
                                }
                                
                `}
            onClick={() => setTabno(0)}
          >
            <div
              className="DAY
                                    font-inter text-zinc-400 text-sm
                    "
            >
              DAY 1
            </div>
            <div
              className="date
                                     font-inter text-xl 
                                    
                    "
            >
              Mar 22
            </div>
          </div>
          <div
            className={`btn2
                                w-1/3
                                flex items-center justify-center
                                md:flex-row
                                flex-col
                                md:gap-2
                                ${
                                  tabNo == 1
                                    ? 'text-white bg-black '
                                    : 'hover:bg-orange-200 cursor-pointer'
                                }
                                
                `}
            onClick={() => setTabno(1)}
          >
            <div
              className="DAY
                                    font-inter text-zinc-400 text-sm
                    "
            >
              DAY 2
            </div>
            <div
              className="date
                                     font-inter text-xl 
                                    
                    "
            >
              Mar 23
            </div>
          </div>
          <div
            className={`btn3
                                w-[34%]
                                flex items-center justify-center
                                md:flex-row
                                flex-col
                                md:gap-2
                                ${
                                  tabNo == 2
                                    ? 'text-white bg-black '
                                    : 'hover:bg-orange-200 cursor-pointer'
                                }
                                
                `}
            onClick={() => setTabno(2)}
          >
            <div
              className="DAY
                                    font-inter text-zinc-400 text-sm
                    "
            >
              DAY 3
            </div>
            <div
              className="date
                                     font-inter text-xl 
                                    
                    "
            >
              Mar 24
            </div>
          </div>
        </div>
        <div
          className="timelineMain
                            md:w-3/4
                            w-11/12
                            h-auto
                            my-8
                            md:p-10
            "
        >
          {infoDay[tabNo].map((x, i) => {
            if (x.noImg && i == infoDay[tabNo].length - 1) {
              return (
                <TimeCardv3
                  eventName={x.eventName}
                  time={x.time}
                  last
                  key={i}
                />
              )
            } else if (x.noImg) {
              return (
                <TimeCardv3
                  eventName={x.eventName}
                  time={x.time}
                  key={i}
                  last={''}
                />
              )
            } else if (x.Img && i == infoDay[tabNo].length - 1) {
              return (
                <TimeCardv4
                  eventName={x.eventName}
                  time={x.time}
                  last
                  speakerImg={x.img}
                  speaker={x.speaker}
                  color={x.color}
                  key={i}
                />
              )
            } else if (x.Img) {
              return (
                <TimeCardv4
                  eventName={x.eventName}
                  time={x.time}
                  speakerImg={x.img}
                  speaker={x.speaker}
                  color={x.color}
                  key={i}
                  last={''}
                />
              )
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default SchedulePage
