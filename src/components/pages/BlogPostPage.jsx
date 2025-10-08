import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../common/Button/Button';
import Badge from '../common/Badge/Badge';
import NotFound from './NotFound';
import blogData from '../../data/blog.json';
import styles from './BlogPostPage.module.css';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find the blog post by slug
  const post = blogData.posts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.article
          className={styles.article}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            variant="ghost"
            size="small"
            onClick={() => navigate('/')}
            className={styles.backButton}
          >
            ← Back to Home
          </Button>

          <header className={styles.header}>
            <div className={styles.meta}>
              <span className={styles.date}>{formatDate(post.date)}</span>
              <span className={styles.separator}>•</span>
              <span className={styles.readTime}>{post.readTime} min read</span>
            </div>

            <h1 className={styles.title}>{post.title}</h1>

            <div className={styles.categories}>
              {post.categories.map((category, idx) => (
                <Badge key={idx} text={category} />
              ))}
            </div>
          </header>

          <div className={styles.content}>
            <p className={styles.abstract}>{post.abstract}</p>

            <div className={styles.body}>
              {/* Render the full content */}
              {post.content ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.content.replace(/\n/g, '<br />'),
                  }}
                />
              ) : (
                <div className={styles.placeholder}>
                  <p>
                    This is a placeholder for the full blog post content. In a
                    real implementation, you would:
                  </p>
                  <ul>
                    <li>Store full blog content in markdown files</li>
                    <li>Use a markdown parser to render HTML</li>
                    <li>Or use a CMS to manage blog content</li>
                  </ul>
                  <p>
                    For now, you can add the full content to the{' '}
                    <code>content</code> field in{' '}
                    <code>src/data/blog.json</code>
                  </p>
                </div>
              )}
            </div>
          </div>

          <footer className={styles.footer}>
            <Button
              variant="secondary"
              onClick={() => navigate('/#blog')}
              className={styles.backToBlog}
            >
              ← Back to All Posts
            </Button>
          </footer>
        </motion.article>
      </div>
    </div>
  );
};

export default BlogPostPage;
