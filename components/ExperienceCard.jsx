import Image from 'next/image';
import styles from '../styles/ExperienceCard.module.css';

const ExperienceCard = ({ experience }) => {
  return (
    <div className={styles.card}>
      <Image src={experience.image} height={100} width={100} alt={experience.company} className={styles.image} />
      <div className={styles.content}>
        <h3>{experience.position}</h3>
        <h4>{experience.company}</h4>
        <p>{experience.description}</p>
        <div className={styles.dates}>
          <span>{experience.startDate} - {experience.endDate || 'Present'}</span>
        </div>
        <div className={styles.tags}>
          {experience.skills.map((skill) => (
            <span key={skill} className={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
