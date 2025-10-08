import PropTypes from 'prop-types';
import styles from './Footer.module.css';

const Footer = ({ social }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
          )}
          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          )}
          {social.scholar && (
            <a
              href={social.scholar}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
            >
              Scholar
            </a>
          )}
        </div>
        <p className={styles.copyright}>
          © {currentYear} Sai Vikas
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  social: PropTypes.shape({
    github: PropTypes.string,
    linkedin: PropTypes.string,
    scholar: PropTypes.string,
  }).isRequired,
};

export default Footer;
