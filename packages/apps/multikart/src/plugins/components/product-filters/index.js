import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import Collapsible from '@oracle-cx-commerce/react-components/collapsible';
import {useSelector} from '@oracle-cx-commerce/react-components/provider';
import {getSearchResults} from '@oracle-cx-commerce/commerce-utils/selector';
import FilterContext from '../context';

import css from './styles.scss';
import {updateHistory} from '../a-product-listing/queryString';

const ProductFilters = props => {
  const {refine} = props;
  const {navigation} = useSelector(getSearchResults);
  const {searchParams, setSearchParams} = useContext(FilterContext);

  const onFilterChange = e => {
    setSearchParams({
      ...searchParams,
      N: e.target.value
        .split('&')[0]
        .replace(/\?Nrpp=\d+/gm, '')
        .replace(/\+/gm, ' ')
        .replace(/[^0-9 ]/gm, '')
    });
    updateHistory({
      ...searchParams,
      N: e.target.value
        .split('&')[0]
        .replace(/\?Nrpp=\d+/gm, '')
        .replace(/\+/gm, ' ')
        .replace(/[^0-9 ]/gm, '')
    });
  };

  return (
    <Styled id="ProductFilters" css={css}>
      <div className="product-filters">
        <h3 className="product-filters__heading">{refine}:</h3>
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
                        {/* <button type="button" onClick={test}>
                          test
                        </button> */}
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
