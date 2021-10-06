import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {useSelector} from '@oracle-cx-commerce/react-components/provider';
import {getSearchResults} from '@oracle-cx-commerce/commerce-utils/selector';
import css from './styles.scss';
import FilterContext from '../context';

const ProductBreadcrumbs = props => {
  const {breadcrumbs} = useSelector(getSearchResults);
  const {searchParams, setSearchParams} = useContext(FilterContext);

  const onCrumbsChange = e => {
    setSearchParams({
      ...searchParams,
      N: e.target.value
        .split('&')[0]
        .replace(/\?Nrpp=\d+/gm, '')
        .replace(/\+/gm, ' ')
        .replace(/[^0-9 ]/gm, '')
    });
  };

  return (
    <Styled id="ProductBreadcrumbs" css={css}>
      <div className="product-breadcrumbs">
        {breadcrumbs.refinementCrumbs.map(item => {
          return (
            <button
              className="product-breadcrumbs__item product-breadcrumbs__item--close"
              key={item.label}
              value={item.removeAction.link}
              onClick={onCrumbsChange}
              type="button"
            >
              {item.displayName}: {item.label}
            </button>
          );
        })}
      </div>
    </Styled>
  );
};

export default ProductBreadcrumbs;
