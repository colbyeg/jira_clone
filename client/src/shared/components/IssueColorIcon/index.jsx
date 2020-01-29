import React from 'react';
import PropTypes from 'prop-types';

import { ColorIcon } from './Styles';

const propTypes = {
  color: PropTypes.string.isRequired,
};

const IssueColorIcon = ({ color, ...otherProps }) => (
  <ColorIcon type={color} color={color} size={18} {...otherProps} />
);

IssueColorIcon.propTypes = propTypes;

export default IssueColorIcon;
