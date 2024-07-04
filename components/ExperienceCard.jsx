import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/ExperienceCard.module.css';

const ExperienceCard = ({ experience }) => {
  const [expanded, setExpanded] = useState(false);
  const descriptionRef = useRef(null);
  const [isTextClamped, setIsTextClamped] = useState(false);

  useEffect(() => {
    const checkClamping = () => {
      const element = descriptionRef.current;
      if (element) {
        const isClamped = element.scrollHeight > element.clientHeight;
        setIsTextClamped(isClamped);
      }
    };

    checkClamping();
    window.addEventListener('resize', checkClamping);

    return () => {
      window.removeEventListener('resize', checkClamping);
    };
  }, []);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.card}>
      <Image src={experience.image} height={100} width={100} alt={experience.company} className={styles.image} />
      <div className={styles.content}>
        <h3>{experience.position}</h3>
        <h4>{experience.company}</h4>
        <div className={styles.description}>
          <ul
            ref={descriptionRef}
            className={`${styles.descriptionList} ${expanded ? styles.expanded : ''}`}
          >
            {experience.description.map((desc, index) => (
              <li style={{ paddingTop: "8px" }} key={index}>{desc}</li>
            ))}
          </ul>
          {isTextClamped && (
            <span className={styles.toggle} onClick={toggleExpansion}>
              {expanded ? 'Show less' : 'Show more'}
            </span>
          )}
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.dates}>
            <span>{experience.startDate} - {experience.endDate || 'Present'}</span>
          </div>
          <div className={styles.tags}>
            {experience.skills.map((skill) => (
              <span key={skill} className={styles.skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
