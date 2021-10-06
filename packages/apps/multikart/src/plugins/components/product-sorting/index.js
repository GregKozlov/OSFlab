import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {StoreContext} from '@oracle-cx-commerce/react-ui/contexts';

import css from './styles.scss';

const ProductSorting = props => {
  const {sortBy, ascending, descending} = props;
  const store = useContext(StoreContext);

  const onSortChange = e => {
    const searchParams = {
      N: '',
      Ns: e.target.value,
      No: '0',
      Nrpp: '12'
    };
    if (searchParams) {
      store.action('search', searchParams);
    }
  };

  return (
    <Styled id="OptionsTab" css={css}>
      <div className="product-sort">
        <h3>{sortBy}</h3>
        <select name="ascDesc" id="" onChange={onSortChange}>
          <option value="product.displayName|0">{ascending}</option>
          <option value="product.listPrice|1">{descending}</option>
        </select>
      </div>
    </Styled>
  );
};

export default ProductSorting;
