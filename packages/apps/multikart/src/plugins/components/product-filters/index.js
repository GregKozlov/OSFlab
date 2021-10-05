import React, {useContext} from 'react';
import {StoreContext} from '@oracle-cx-commerce/react-ui/contexts';

import Styled from '@oracle-cx-commerce/react-components/styled';
import Collapsible from '@oracle-cx-commerce/react-components/collapsible';

import {useSelector} from '@oracle-cx-commerce/react-components/provider';
import {getSearchResults} from '@oracle-cx-commerce/commerce-utils/selector';

import css from './styles.scss';

const ProductFilters = props => {
  // const result = useSelector(store => store.searchRepository.pages['/jeans/category/c20001/'].navigation);
  const {navigation} = useSelector(getSearchResults);

  const store = useContext(StoreContext);
  const onFilterChange = e => {
    const searchParams = {
      N: e.target.value
        .split('&')[0]
        .replace(/\+/g, ' ')
        .split('')
        .splice(3)
        .join('')
    };
    if (searchParams) {
      store.action('search', searchParams);
    }
  };

  return (
    <Styled id="ProductFilters" css={css}>
      <div className="product-filters">
        <h3 className="product-filters__heading">Refine By:</h3>
        <div className="product-filters-section">
          {navigation.navigation.map(allItem => {
            return (
              <Collapsible title={<h4>{allItem.displayName} </h4>} key={allItem.dimensionName}>
                <div className="product-filters-section__price">
                  {allItem.refinements.map(item => {
                    return (
                      <label htmlFor={item.label} key={item.label}>
                        <input id={item.label} value={item.link} type="checkbox" onChange={onFilterChange} />
                        {item.label}
                      </label>
                    );
                  })}
                </div>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </Styled>
  );
};

export default ProductFilters;
