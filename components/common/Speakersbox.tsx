import { urlForImage } from '@/sanity/lib/image'
import { Speaker } from '@/sanity/schemas/speaker'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'
import styles from './Speakersbox.module.css'

export default function Speakersbox({
  setShowModal,
  setCurrSpeaker,
  speaker,
  width,
}: {
  speaker: Speaker
  setShowModal: Dispatch<SetStateAction<boolean>>
  setCurrSpeaker: Dispatch<SetStateAction<Speaker>>
  width: string
}) {
  return (
    <div className={styles['speaker-box']} style={{ width: width }}>
      <div className={styles['content-box']}>
        <Image
          src={urlForImage(speaker.image)}
          alt="speaker photo"
          width={150}
          height={150}
          className={styles['speaker-image']}
        />

        <h3 className={styles['speaker-name']}>{speaker.name}</h3>
        <p className={styles['speaker-description']}>{speaker.description}</p>

        <div className={styles['bottom-btns']}>
          <div className={styles['bottom-icons']}>
            {speaker.socials?.length > 0 && (
              <a
                href={speaker.socials[0].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/web.svg" alt="web icon" />
              </a>
            )}
            {speaker.socials?.length > 1 && (
              <a
                href={speaker.socials[1]?.link ?? '/'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.svg" alt="linkedin icon" />
              </a>
            )}
          </div>
          <button
            className={styles['view-btn']}
            onClick={() => {
              setShowModal(true)
              setCurrSpeaker(speaker)
            }}
          >
            <img src={'/arrow_right.svg'} alt="View more" />
          </button>
        </div>
      </div>
      <div className={styles['talk-box']}>
        <p className={styles['talk-text']}>TALK</p>
        <p className={styles['talk-type']}>{speaker.talk}</p>
      </div>
    </div>
  )
}
