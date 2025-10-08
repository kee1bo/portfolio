import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import styles from './CurrentFocus.module.css';

const CurrentFocus = ({ profile }) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section
      className={styles.focus}
      id="focus"
      ref={elementRef}
      aria-label="Current focus section"
    >
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.h2 className={styles.heading} variants={itemVariants}>
          Current Focus
        </motion.h2>

        <motion.p className={styles.description} variants={itemVariants}>
          Areas I'm actively working on and exploring
        </motion.p>

        <motion.div className={styles.grid} variants={containerVariants}>
          {profile.currentFocus.map((area, index) => (
            <motion.div
              key={index}
              className={styles.focusCard}
              variants={itemVariants}
            >
              <div className={styles.iconWrapper}>
                <span className={styles.icon}>→</span>
              </div>
              <h3 className={styles.focusTitle}>{area}</h3>
            </motion.div>
          ))}
        </motion.div>

        {profile.skills && (
          <motion.div className={styles.skillsSection} variants={itemVariants}>
            <h3 className={styles.skillsHeading}>Technical Skills</h3>
            <div className={styles.skillsGrid}>
              {profile.skills.map((skill, index) => (
                <span key={index} className={styles.skillBadge}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

CurrentFocus.propTypes = {
  profile: PropTypes.shape({
    currentFocus: PropTypes.arrayOf(PropTypes.string).isRequired,
    skills: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default CurrentFocus;
