import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {StoreContext} from '@oracle-cx-commerce/react-ui/contexts';
import {useSelector} from '@oracle-cx-commerce/react-components/provider';
import {getSearchResults, getCategories} from '@oracle-cx-commerce/commerce-utils/selector';
import css from './styles.scss';

const ProductBreadcrumbs = props => {
  const {breadcrumbs} = useSelector(getSearchResults);
  const initialCrumb = useSelector(getCategories);

  const store = useContext(StoreContext);

  const onCrumbClick = e => {
    const searchParams = {
      N: e.target.value
        .split('&')[0]
        .replace(/\+/g, ' ')
        .split('')
        .splice(3)
        .join(''),
      Ns: '',
      No: '0',
      Nrpp: '12'
    };
    if (searchParams) {
      store.action('search', searchParams);
    }
  };

  return (
    <Styled id="ProductBreadcrumbs" css={css}>
      <div className="product-breadcrumbs">
        <button className="product-breadcrumbs__item" type="button">
          {initialCrumb.c20001.displayName}
        </button>
        {breadcrumbs.refinementCrumbs.map(item => {
          return (
            <button
              className="product-breadcrumbs__item product-breadcrumbs__item--close"
              key={item.label}
              value={item.removeAction.link}
              onClick={onCrumbClick}
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
