import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'harshdatt17@gmail.com',
    href: 'mailto:harshdatt17@gmail.com',
  },
  {
    social: 'github',
    link: 'HarshDutt17',
    href: 'https://github.com/HarshDutt17',
  },
  {
    social: 'linkedin',
    link: 'harshdutt17',
    href: 'https://www.linkedin.com/in/harshdutt17/',
  },
  {
    social: 'whatsapp',
    link: '+91 9915895640',
    href: 'https://wa.me/+919915895640',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
