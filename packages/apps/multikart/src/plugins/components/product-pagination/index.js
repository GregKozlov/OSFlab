import React from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

import css from './styles.scss';

const ProductPagination = props => {
  return (
    <Styled id="ProductPagination" css={css}>
      <div className="product-pagination">
        <div className="product-pagination__nav">Previous</div>
        <div className="product-pagination-pages">
          <div className="product-pagination-pages__item product-pagination-pages__item--active">1</div>
          <div className="product-pagination-pages__item">2</div>
          <div className="product-pagination-pages__item">3</div>
          <div className="product-pagination-pages__item">4</div>
          <div className="product-pagination-pages__item">5</div>
          <div className="product-pagination-pages__item">...</div>
        </div>
        <div className="product-pagination__nav">Next</div>
      </div>
    </Styled>
  );
};

export default ProductPagination;
