import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import PaperCard from './PaperCard';
import styles from './Research.module.css';

const Research = ({ research }) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
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

  const headingVariants = {
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
    <section className={styles.research} id="research" ref={elementRef} aria-label="Research section">
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.h2 className={styles.heading} variants={headingVariants}>
          Research
        </motion.h2>

        {research.published && research.published.length > 0 && (
          <div className={styles.section}>
            <motion.h3 className={styles.subheading} variants={headingVariants}>
              Published Papers
            </motion.h3>
            <motion.div className={styles.papersList} variants={containerVariants}>
              {research.published.map((paper, index) => (
                <PaperCard key={paper.id} paper={paper} index={index} />
              ))}
            </motion.div>
          </div>
        )}

        {research.working && research.working.length > 0 && (
          <div className={styles.section}>
            <motion.h3 className={styles.subheading} variants={headingVariants}>
              Working Papers & Ongoing Research
            </motion.h3>
            <motion.div className={styles.workingList} variants={containerVariants}>
              {research.working.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={styles.workingItem}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5,
                        delay: index * 0.1,
                        ease: 'easeOut',
                      },
                    },
                  }}
                >
                  <h4 className={styles.workingTitle}>{item.title}</h4>
                  <p className={styles.workingDescription}>{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

Research.propTypes = {
  research: PropTypes.shape({
    published: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.arrayOf(PropTypes.string).isRequired,
        venue: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        summary: PropTypes.string.isRequired,
        pdfUrl: PropTypes.string,
        doiUrl: PropTypes.string,
      })
    ),
    working: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default Research;
