import React from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

import css from './styles.scss';

const ProductTile = props => {
  return (
    <Styled id="ProductTile" css={css}>
      <div className="product-tile">
        <div className="product-tile__top-section">
          <img src="https://bla.com.au/wp-content/uploads/2020/04/123360.jpg" alt="Golight stryker bulb" />
          <a href="https://www.google.com/">
            <span>Golight stryker HID w/wireless HH remote</span>
          </a>
          <span>#65343611TU</span>
        </div>

        <div className="product-tile__mid-section">
          <span>$962.95</span>
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
