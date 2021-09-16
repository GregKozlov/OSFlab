import React from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

import css from './styles.scss';

const ProductTile = props => {
  const {image, imageAlt, productLink, productName, productId, productPrice} = props;

  return (
    <Styled id="ProductTile" css={css}>
      <div className="product-tile">
        <div className="product-tile__top-section">
          <img src={image} alt={imageAlt} />
          <a href={productLink}>
            <span>{productName}</span>
          </a>
          <span>{productId}</span>
        </div>

        <div className="product-tile__mid-section">
          <span>{productPrice}</span>
          <div>
            <span>Qty:</span>
            <input type="text" defaultValue="1" />
            <span>Each</span>
          </div>
        </div>

        <div className="product-tile__bottom-section">
          <button type="button">Add to Cart</button>
        </div>
      </div>
    </Styled>
  );
};

export default ProductTile;
