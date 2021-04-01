import React from 'react';
import PropTypes from 'prop-types';
import styles from './Enquiry.module.scss';

const Enquiry = () => (
  <div className={styles.Enquiry} data-testid="Enquiry">
    Enquiry Component
  </div>
);

Enquiry.propTypes = {};

Enquiry.defaultProps = {};

export default Enquiry;
