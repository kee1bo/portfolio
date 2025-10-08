import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ children, className = '', hover = true, ...props }) => {
  const cardClasses = [
    styles.card,
    hover && styles.hover,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
};

export default Card;
