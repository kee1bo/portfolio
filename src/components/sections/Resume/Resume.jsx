import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import Button from '../../common/Button/Button';
import styles from './Resume.module.css';

const Resume = ({ profile }) => {
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

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = `${profile.name.replace(' ', '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.resume} id="resume" ref={elementRef} aria-label="Resume section">
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.h2 className={styles.heading} variants={itemVariants}>
          Resume
        </motion.h2>

        <motion.div className={styles.downloadSection} variants={itemVariants}>
          <p className={styles.description}>
            Download my complete resume to learn more about my experience,
            education, and skills.
          </p>
          <Button variant="primary" size="large" onClick={handleDownload}>
            Download Resume (PDF)
          </Button>
        </motion.div>

        <motion.div className={styles.highlights} variants={itemVariants}>
          <div className={styles.highlightCard}>
            <h3 className={styles.highlightTitle}>Education</h3>
            <div className={styles.highlightContent}>
              <p className={styles.highlightText}>
                Advanced degrees in Computer Science and Machine Learning
              </p>
              <p className={styles.highlightSubtext}>
                Focus on Explainable AI and Deep Learning
              </p>
            </div>
          </div>

          <div className={styles.highlightCard}>
            <h3 className={styles.highlightTitle}>Skills</h3>
            <div className={styles.highlightContent}>
              <p className={styles.highlightText}>
                Python, TensorFlow, PyTorch, React, Docker
              </p>
              <p className={styles.highlightSubtext}>
                Machine Learning, Deep Learning, XAI, MLOps
              </p>
            </div>
          </div>

          <div className={styles.highlightCard}>
            <h3 className={styles.highlightTitle}>Experience</h3>
            <div className={styles.highlightContent}>
              <p className={styles.highlightText}>
                {profile.currentRole}
              </p>
              <p className={styles.highlightSubtext}>
                Building interpretable ML systems for production
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

Resume.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    currentRole: PropTypes.string.isRequired,
  }).isRequired,
};

export default Resume;
