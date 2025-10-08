import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a
        href={href}
        className={buttonClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  href: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
