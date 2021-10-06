import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import FilterContext from '../context';

import css from './styles.scss';

const ProductSorting = props => {
  const {sortBy, ascending, descending} = props;
  const {searchParams, setSearchParams} = useContext(FilterContext);

  const onSortChange = e => {
    setSearchParams({
      ...searchParams,
      Ns: e.target.value
    });
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
