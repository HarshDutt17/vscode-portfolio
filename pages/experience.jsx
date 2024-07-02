import ExperienceCard from '../components/ExperienceCard';
import { getExperience } from './api/experience';
import styles from '../styles/ExperiencePage.module.css';

const ExperiencesPage = ({ experiences }) => {
  // Sort experiences by time, most recent first
  experiences.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

  return (
    <>
      <h3>My Professional Experiences</h3>
      <div className={styles.container}>
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </>
  );
};


export async function getStaticProps() {
  const experiences = getExperience();

  return {
    props: { title: 'Experiences', experiences },
  };
}

export default ExperiencesPage;
