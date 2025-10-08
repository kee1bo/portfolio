import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import ProjectCard from './ProjectCard';
import Button from '../../common/Button/Button';
import styles from './Projects.module.css';

const Projects = ({ projects }) => {
  const navigate = useNavigate();
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
    <section className={styles.projects} id="projects" ref={elementRef} aria-label="Projects section">
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.h2 className={styles.heading} variants={headingVariants}>
          Featured Projects
        </motion.h2>

        <motion.div className={styles.grid} variants={containerVariants}>
          {projects.featured
            .filter(project => project.featured === true)
            .map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
        </motion.div>

        <motion.div className={styles.moreProjects} variants={headingVariants}>
          <Button
            variant="secondary"
            size="large"
            onClick={() => navigate('/projects')}
          >
            View All Projects
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.shape({
    featured: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
        metrics: PropTypes.string,
        githubUrl: PropTypes.string,
        demoUrl: PropTypes.string,
        imageUrl: PropTypes.string,
      })
    ).isRequired,
    moreProjectsUrl: PropTypes.string,
  }).isRequired,
};

export default Projects;
