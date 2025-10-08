import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import BlogCard from './BlogCard';
import Badge from '../../common/Badge/Badge';
import styles from './Blog.module.css';

const Blog = ({ blog }) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
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

  const sortedPosts = [...blog.posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const filteredPosts =
    selectedCategory === 'All'
      ? sortedPosts
      : sortedPosts.filter(post => post.categories.includes(selectedCategory));

  const handlePostClick = post => {
    navigate(`/blog/${post.slug}`);
  };

  return (
    <section className={styles.blog} id="blog" ref={elementRef} aria-label="Blog section">
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.h2 className={styles.heading} variants={headingVariants}>
          Blog & Notes
        </motion.h2>

        <motion.div className={styles.filters} variants={headingVariants}>
          <button
            className={`${styles.filterButton} ${
              selectedCategory === 'All' ? styles.active : ''
            }`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          {blog.categories.map(category => (
            <button
              key={category}
              className={`${styles.filterButton} ${
                selectedCategory === category ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div className={styles.grid} variants={containerVariants}>
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              onClick={handlePostClick}
            />
          ))}
        </motion.div>

        {filteredPosts.length === 0 && (
          <motion.p className={styles.noPosts} variants={headingVariants}>
            No posts found in this category.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

Blog.propTypes = {
  blog: PropTypes.shape({
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        abstract: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        categories: PropTypes.arrayOf(PropTypes.string).isRequired,
        readTime: PropTypes.number.isRequired,
      })
    ).isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Blog;
