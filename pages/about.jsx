import Image from 'next/image';
import styles from '../styles/AboutPage.module.css'; // Adjust path as necessary

const AboutPage = () => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h3>A Little Bit About Me</h3>
        <p>
          I am Harsh Dutt, a recent graduate with a Bachelor's degree in Computer Science from Punjab Engineering College, completing my education in June 2024. Throughout my academic journey, I have developed a robust skill set encompassing Java Development, Django, and Node.js, alongside a keen ability to swiftly adapt to emerging technologies. My diverse internship experiences at Arcesium, STGI Technologies, and Foxmula have equipped me with hands-on expertise in optimizing backend systems, deploying machine learning solutions on AWS, and proficiently developing full-stack applications using frameworks like Vue.js and ReactJS.
        </p>
        <p>
          I am particularly proud of my achievements in competitive programming and hackathons, including winning the prestigious Code For Good 2023 organized by JP Morgan and securing accolades in events like CodeBlooded 4.0. These experiences have not only refined my technical prowess but also strengthened my problem-solving abilities and proficiency in Data Structures and Algorithms (DSA). I am passionate about leveraging technology to drive innovation and solve real-world challenges.
        </p>
        <p>
          For more insights into my professional journey and achievements, please visit my LinkedIn profile at <a href="https://www.linkedin.com/in/harshdutt17" className={styles.underline} target="_blank" rel="noopener noreferrer">linkedin.com/in/harshdutt17</a>.
        </p>
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
