import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I Develop</h1>
          <h1></h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
          <div className={styles.image}>

          <div className={styles['profile-image']}>
          <Image src="/profile.jpeg" height={120} width={120} alt="Profile Image" className='profile-image' />
            </div>
            </div>
            <h1 className={styles.name}>Harsh Dutt</h1>
            <h6 className={styles.bio}>Full Stack Web Developer</h6>
            <Link href="/experience">
              <button className={styles.button}>View Experiences</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <Illustration className={styles.illustration} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
