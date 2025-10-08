import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Button from '../../common/Button/Button';
import Badge from '../../common/Badge/Badge';
import Card from '../../common/Card/Card';
import styles from './Projects.module.css';

const ProjectCard = ({ project, index }) => {
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

  return (
    <motion.div variants={cardVariants}>
      <Card className={styles.projectCard}>
        {project.imageUrl && (
          <div className={styles.projectImage}>
            <img
              src={project.imageUrl}
              alt={project.title}
              onError={e => {
                e.target.src = 'https://via.placeholder.com/600x400/f5f5f5/000000?text=Project';
              }}
            />
          </div>
        )}

        <div className={styles.projectContent}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectDescription}>{project.description}</p>

          <div className={styles.projectTech}>
            {project.techStack.map((tech, idx) => (
              <Badge key={idx} text={tech} />
            ))}
          </div>

          {project.metrics && (
            <div className={styles.projectMetrics}>
              <span>{project.metrics}</span>
            </div>
          )}

          <div className={styles.projectLinks}>
            {project.githubUrl && (
              <Button
                variant="secondary"
                size="small"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
            )}
            {project.demoUrl && (
              <Button
                variant="primary"
                size="small"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.isLive ? 'Live Demo' : 'Demo'}
              </Button>
            )}
            {project.youtubeUrl && (
              <Button
                variant="secondary"
                size="small"
                href={project.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Video
              </Button>
            )}
            {project.mediumUrl && (
              <Button
                variant="ghost"
                size="small"
                href={project.mediumUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Article
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
    metrics: PropTypes.string,
    githubUrl: PropTypes.string,
    demoUrl: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
