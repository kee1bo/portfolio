/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
/* eslint-enable no-unused-vars */
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import styles from './Hero.module.css';

const Hero = ({ profile }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const handleScrollTo = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.hero} id="home" aria-label="Hero section">
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        role="banner"
      >
        <motion.h1 className={styles.name} variants={itemVariants}>
          {profile.name}
        </motion.h1>

        <motion.h2 className={styles.title} variants={itemVariants}>
          {profile.title}
        </motion.h2>

        <motion.p className={styles.tagline} variants={itemVariants}>
          {profile.tagline}
        </motion.p>

        <motion.div className={styles.cta} variants={itemVariants}>
          <Button
            variant="primary"
            size="large"
            onClick={() => handleScrollTo('projects')}
          >
            View Projects
          </Button>
          <Button
            variant="secondary"
            size="large"
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Button>
          <Button
            variant="ghost"
            size="large"
            onClick={() => handleScrollTo('contact')}
          >
            Contact
          </Button>
        </motion.div>

        <motion.div className={styles.social} variants={itemVariants}>
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
          )}
          <span className={styles.separator}>•</span>
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          )}
          <span className={styles.separator}>•</span>
          {profile.social.scholar && (
            <a
              href={profile.social.scholar}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Scholar"
            >
              Scholar
            </a>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

Hero.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    social: PropTypes.shape({
      github: PropTypes.string,
      linkedin: PropTypes.string,
      scholar: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Hero;
