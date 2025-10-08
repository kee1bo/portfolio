import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Button from '../../common/Button/Button';
import styles from './Research.module.css';

const PaperCard = ({ paper, index }) => {
  const cardVariants = {
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
  };

  return (
    <motion.div className={styles.paperCard} variants={cardVariants}>
      <div className={styles.paperHeader}>
        <h3 className={styles.paperTitle}>{paper.title}</h3>
        <div className={styles.paperMeta}>
          <span className={styles.paperAuthors}>
            {paper.authors.join(', ')}
          </span>
          <span className={styles.paperVenue}>
            {paper.venue}, {paper.year}
          </span>
        </div>
      </div>

      <p className={styles.paperSummary}>{paper.summary}</p>

      <div className={styles.paperLinks}>
        {paper.pdfUrl && (
          <Button
            variant="secondary"
            size="small"
            href={paper.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            PDF
          </Button>
        )}
        {paper.doiUrl && (
          <Button
            variant="ghost"
            size="small"
            href={paper.doiUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            DOI
          </Button>
        )}
      </div>
    </motion.div>
  );
};

PaperCard.propTypes = {
  paper: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string).isRequired,
    venue: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    pdfUrl: PropTypes.string,
    doiUrl: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default PaperCard;
