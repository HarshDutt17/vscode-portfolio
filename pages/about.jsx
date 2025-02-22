import Image from 'next/image';
import styles from '../styles/AboutPage.module.css'; // Adjust path as necessary

const AboutPage = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.heading}>A Little Bit About Me</h3>
        <p className={styles.paragraph}>
          I'm Harsh Dutt, a Computer Science graduate from Punjab Engineering College. With hands-on experience in Java, Django, Node.js, and full-stack development, I've honed my skills through internships at Arcesium, STGI Technologies, and Foxmula. I excel in optimizing backend systems, deploying ML solutions on AWS, and crafting applications using Vue.js and ReactJS.
        </p>
        <p className={styles.paragraph}>
          I've achieved notable success in competitive programming, winning the Code For Good 2023 by JP Morgan, and accolades at CodeBlooded 4.0. My journey has refined my problem-solving abilities and deepened my expertise in Data Structures and Algorithms.
        </p>
        <p className={styles.paragraph}>
          Connect with me on <a href="https://www.linkedin.com/in/harshdutt17" className={styles.underline} target="_blank" rel="noopener noreferrer">LinkedIn</a> to learn more about my professional journey and achievements.
        </p>
        <button className={styles.button} onClick={() => window.open('/Harsh_SDE_java_react_resume.pdf', '_blank')}>
          Download Resume
        </button>
      </div>
      <div className={styles.image}>
        <div className={styles['profile-image']}>
          <Image src="/profile.jpeg" height={100} width={100} alt="Profile Image" className="profile-image" />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
