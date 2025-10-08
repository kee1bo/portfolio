import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Badge from '../../common/Badge/Badge';
import Card from '../../common/Card/Card';
import styles from './Blog.module.css';

const BlogCard = ({ post, index, onClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <motion.div variants={cardVariants}>
      <Card className={styles.blogCard} onClick={() => onClick(post)}>
        <div className={styles.blogHeader}>
          <div className={styles.blogMeta}>
            <span className={styles.blogDate}>{formatDate(post.date)}</span>
            <span className={styles.blogSeparator}>•</span>
            <span className={styles.blogReadTime}>{post.readTime} min read</span>
          </div>
        </div>

        <h3 className={styles.blogTitle}>{post.title}</h3>
        <p className={styles.blogAbstract}>{post.abstract}</p>

        <div className={styles.blogCategories}>
          {post.categories.map((category, idx) => (
            <Badge key={idx} text={category} />
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    readTime: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BlogCard;
