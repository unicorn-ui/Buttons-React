import PropTypes from 'prop-types';
import React from 'react';
import { compact, omit } from 'underscore';
import styles from './buttons-lite.css';

function getRaised(raised, color) {
  if (!raised) return false;

  let raisedKey;
  if (color) {
    // raised-primary, raised-action, etc.
    raisedKey = `raised-${color}`;
  } else {
    raisedKey = `raised`;
  }
  return styles[raisedKey];
}

function getClasses(className, { color, shape, size, link, block, raised }) {
  const shouldAddBase = color || shape || size || link || block || raised;
  const raisedVal = getRaised(raised, color);
  const classes = compact([
    color && styles[color],
    raisedVal,
    shape && styles[shape],
    size && styles[size],
    block && styles.block,
    link && styles.link,
    shouldAddBase && styles.button,
    className,
  ]);

  return classes.join(' ');
}

export default function Button({ children, className, ...rest }) {
  const passThruProps = omit(rest, Object.keys(Button.propTypes));

  return (
    <button
      {...passThruProps}
      className={getClasses(className, rest) || undefined}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'secondary', 'action', 'highlight', 'warning', 'caution']),
  shape: PropTypes.oneOf(['rounded', 'pill']),
  size: PropTypes.oneOf(['tiny', 'small', 'normal', 'large', 'jumbo', 'giant']),
  block: PropTypes.bool,
  raised: PropTypes.bool,
  link: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: undefined,
  color: undefined,
  shape: undefined,
  size: undefined,
  raised: false,
  block: false,
  link: undefined,
};
