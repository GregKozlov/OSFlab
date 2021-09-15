import React from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

import css from './styles.scss';

const ProductTile = props => {
  return (
    <Styled id="ProductTile" css={css}>
      <div className="ProductTile"> Base Component ProductTile</div>
    </Styled>
  );
};

export default ProductTile;
