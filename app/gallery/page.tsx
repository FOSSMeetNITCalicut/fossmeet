import Card from "@/components/Card";
import Navbar from '@/components/common/Navbar';
import PageTitle from '@/components/common/PageTitle';
import Footer from '@/components/footer/Footer';
import Head from 'next/head';
import styles from "./page.module.css";

let images = [
    'img-31.jpg',
    'img-32.jpg',
    'img-33.jpg',
    'img-4.jpg',
    'img-5.jpg',
    'img-30.jpg',
    'img-7.jpg',
    'img-8.jpg',
    'img-9.jpg',
    'img-10.jpg',
    'img-40.jpg',
    'img-12.jpg',
    'img-14.jpg',
    'img-17.jpg',
    'img-18.jpg',
    'img-19.jpg',
    'img-21.jpg',
    'img-1.jpg',
    'img-22.jpg',
    'img-23.jpg',
    'img-24.jpg',
    'img-6.jpg',
    'img-25.jpg',
    'img-26.jpg',
    'img-34.jpg',
    'img-35.jpg',
    'img-36.jpg',
    'img-37.jpg',
    'img-39.jpg',
    'img-42.jpg',
    'img-38.jpg',
]

const Media = () => {
    // let router = useRouter();
    return (
        <div>

            <Head>
                <title>FOSSMeet&apos;24</title>
                <meta name='description' content='FOSS Meet 2022-23' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Navbar />
            <PageTitle imageSrc={'/camera.png'} title={'Gallery'} tag={'FOSSMeet\'24'} />
            <div className={`${styles.media_body} margin`}>
                <div className={styles.media_gallery}>
                    {images.map((image, i) => {
                        return (
                            <div  key={i}>
                                <Card img_name={image} />
                            </div>)
                    })}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Media;

// Ideas: If I cannot use an image modal, we create separate page for image, and add CSS to it.
// https://www.youtube.com/watch?v=P4W_LaotmNI
