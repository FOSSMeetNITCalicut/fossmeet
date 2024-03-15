import Navbar from '@/components/common/Navbar'
import PageTitle from '@/components/common/PageTitle'
import Footer from '@/components/footer/Footer'
import { Sponsor } from '@/components/sponsors/Sponsors'
import styles from './page.module.css'

export default async function Page() {
  return (
    <>
      <Navbar />
      <PageTitle imageSrc={'./star.png'} title="Sponsors" tag="Event" />
      <main className="outer-margin">
        <div className="inner-margin">
          <div className={styles['sponsors-grid']}>
            <Sponsor
              imgSrc={'/nilenso.svg'}
              dotColor="#FF3D84"
              name="Nilenso"
              tier="🥇 GOLD TIER"
              link="https://nilenso.com/"
            />
            <Sponsor
              imgSrc={'/foss_united.svg'}
              dotColor="#0F9C47"
              name="FOSS United"
              tier="🥈 SILVER TIER"
              link="https://fossunited.org/"
            />
            <Sponsor
              imgSrc={'/fsf.svg'}
              dotColor="#FF3D84"
              name="Free Software Foundation"
              tier="🥈 SUPPORTER TIER"
              link="https://fsf.org/"
            />
            <Sponsor
              imgSrc={'/Gnomelogo.svg'}
              dotColor="#FF3D84"
              name="GNOME"
              tier="🥈 SUPPORTER TIER"
              link="https://www.gnome.org/"
              scale={0.4}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
