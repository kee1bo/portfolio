import { motion } from 'framer-motion';
import Button from '../common/Button/Button';
import styles from './NotFound.module.css';

const NotFound = () => {
  const handleGoHome = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.notFound}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.description}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="primary" size="large" onClick={handleGoHome}>
          Go to Home
        </Button>
      </motion.div>
    </div>
  );
};

export default NotFound;
