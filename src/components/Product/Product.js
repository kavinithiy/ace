import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';

const Product = () => (
  <div className={styles.Product} data-testid="Product">
    Product Component
  </div>
);

Product.propTypes = {};

Product.defaultProps = {};

export default Product;
