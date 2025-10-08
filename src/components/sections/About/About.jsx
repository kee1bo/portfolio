import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import styles from './About.module.css';

const About = ({ profile }) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className={styles.about} id="about" ref={elementRef} aria-label="About section">
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.h2 className={styles.heading} variants={itemVariants}>
          About Me
        </motion.h2>

        <div className={styles.content}>
          <motion.div className={styles.imageWrapper} variants={itemVariants}>
            <img
              src={profile.photo}
              alt={profile.name}
              className={styles.image}
              onError={e => {
                e.target.src = 'https://via.placeholder.com/400x400/f5f5f5/000000?text=SV';
              }}
            />
          </motion.div>

          <motion.div className={styles.info} variants={itemVariants}>
            <p className={styles.bio}>{profile.bio}</p>

            {profile.education && (
              <div className={styles.details}>
                {profile.education.map((edu, index) => (
                  <div key={index} className={styles.detailItem}>
                    <h3 className={styles.detailLabel}>Education</h3>
                    <p className={styles.detailValue}>
                      {edu.degree} in {edu.field}
                    </p>
                    <p className={styles.detailSubValue}>
                      {edu.institution}
                    </p>
                    <p className={styles.detailSubValue}>
                      {edu.period} • {edu.status}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

About.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    currentRole: PropTypes.string.isRequired,
    affiliation: PropTypes.string,
    researchInterests: PropTypes.arrayOf(PropTypes.string).isRequired,
    photo: PropTypes.string.isRequired,
  }).isRequired,
};

export default About;
