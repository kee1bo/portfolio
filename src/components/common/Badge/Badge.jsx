import PropTypes from 'prop-types';
import styles from './Badge.module.css';

const Badge = ({ text, className = '', ...props }) => {
  const badgeClasses = [styles.badge, className].filter(Boolean).join(' ');

  return (
    <span className={badgeClasses} {...props}>
      {text}
    </span>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Badge;
