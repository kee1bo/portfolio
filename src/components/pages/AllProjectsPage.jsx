import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../sections/Projects/ProjectCard';
import Button from '../common/Button/Button';
import projectsData from '../../data/projects.json';
import styles from './AllProjectsPage.module.css';

const AllProjectsPage = () => {
  const navigate = useNavigate();

  // Show all projects (featured + all)
  const allProjects = [
    ...projectsData.featured,
    ...(projectsData.all || []),
  ];

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.header}>
            <Button
              variant="ghost"
              size="small"
              onClick={() => navigate('/')}
              className={styles.backButton}
            >
              ← Back to Home
            </Button>
            <h1 className={styles.title}>All Projects</h1>
            <p className={styles.subtitle}>
              A comprehensive collection of my work in machine learning,
              research, and software development.
            </p>
          </div>

          <div className={styles.grid}>
            {allProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {allProjects.length === 0 && (
            <div className={styles.empty}>
              <p>No projects to display yet. Check back soon!</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AllProjectsPage;
