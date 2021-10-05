import React from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

import css from './styles.scss';

const ProductTile = props => {
  const {
    image = 'https://bla.com.au/wp-content/uploads/2020/04/123360.jpg',
    imageAlt = 'Golight stryker bulb',
    productLink = 'https://www.google.com/',
    productName = 'Golight stryker HID w/wireless HH remote',
    color = 'Color',
    length = 'Length',
    waist = 'Waist',
    productColor = 'Light Wash',
    productLength = '36',
    productWaist = '32',
    productPrice = '962.95',
    qty = 'Qty:',
    each = 'Each',
    addToCart = 'Add to cart'
  } = props;

  return (
    <Styled id="ProductTile" css={css}>
      <div className="product-tile">
        <div className="product-tile__top-section">
          <img src={image} alt={imageAlt} />
          <a href={productLink}>
            <span>{productName}</span>
          </a>
          <span>
            {color}: {productColor}
          </span>
          <span>
            {length}: {productLength}
          </span>
          <span>
            {waist}: {productWaist}
          </span>
        </div>

        <div className="product-tile__mid-section">
          <span>${productPrice}</span>
          <div>
            <span>{qty}</span>
            <input type="text" defaultValue="1" />
            <span>{each}</span>
          </div>
        </div>

        <div className="product-tile__bottom-section">
          <button type="button">{addToCart}</button>
        </div>
      </div>
    </Styled>
  );
};

export default ProductTile;
