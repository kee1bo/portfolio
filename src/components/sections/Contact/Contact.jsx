import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import styles from './Contact.module.css';

const Contact = ({ profile }) => {
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



  return (
    <section className={styles.contact} id="contact" ref={elementRef} aria-label="Contact section">
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <motion.h2 className={styles.heading} variants={itemVariants}>
          Get In Touch
        </motion.h2>

        <motion.p className={styles.description} variants={itemVariants}>
          Have a question or want to work together? Let's connect!
        </motion.p>

        <div className={styles.content}>
          <motion.div className={styles.ctaWrapper} variants={itemVariants}>
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaTitle}>Get in Touch</h3>
              <p className={styles.ctaText}>
                The best way to reach me is through LinkedIn. I typically respond within 24 hours.
              </p>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedinButton}
              >
                Message on LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div className={styles.info} variants={itemVariants}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Email</h3>
              <a href={`mailto:${profile.email}`} className={styles.infoLink}>
                {profile.email}
              </a>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Connect</h3>
              <div className={styles.socialLinks}>
                {profile.social.github && (
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    GitHub
                  </a>
                )}
                {profile.social.linkedin && (
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    LinkedIn
                  </a>
                )}
                {profile.social.scholar && (
                  <a
                    href={profile.social.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    Scholar
                  </a>
                )}
              </div>
            </div>

            {profile.calendarLink && (
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Schedule a Call</h3>
                <a
                  href={profile.calendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoLink}
                >
                  Book a meeting
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

Contact.propTypes = {
  profile: PropTypes.shape({
    email: PropTypes.string.isRequired,
    social: PropTypes.shape({
      github: PropTypes.string,
      linkedin: PropTypes.string,
      scholar: PropTypes.string,
    }).isRequired,
    calendarLink: PropTypes.string,
  }).isRequired,
};

export default Contact;
