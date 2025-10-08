import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Navigation.module.css';

const Navigation = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      // If at the very top, always show Home as active
      if (window.scrollY < 50) {
        setActiveSection('home');
        return;
      }

      // Check sections in reverse order (bottom to top)
      const reversedSections = [...sections].reverse();
      
      for (const section of reversedSections) {
        if (section.id === 'home') continue;
        
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop } = element;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            return;
          }
        }
      }
      
      // Default to home if no section matches
      setActiveSection('home');
    };

    handleScroll(); // Run on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);

    // If not on home page, navigate to home first
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          SV
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className={isOpen ? styles.open : ''}></span>
          <span className={isOpen ? styles.open : ''}></span>
          <span className={isOpen ? styles.open : ''}></span>
        </button>

        <ul className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
          {sections.map(section => (
            <li key={section.id}>
              <a
                href={section.path}
                className={
                  activeSection === section.id ? styles.active : ''
                }
                onClick={e => handleNavClick(e, section.id)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
