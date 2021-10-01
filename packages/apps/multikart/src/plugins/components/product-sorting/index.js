import React from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

import css from './styles.scss';

const ProductSorting = props => {
  return (
    <Styled id="OptionsTab" css={css}>
      <div className="product-sort">
        <h3>Sort By</h3>
        <select name="ascDesc" id="">
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </Styled>
  );
};

export default ProductSorting;
