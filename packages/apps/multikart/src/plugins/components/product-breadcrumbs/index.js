import React, {useContext, useEffect} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {StoreContext} from '@oracle-cx-commerce/react-ui/contexts';
import {useSelector} from '@oracle-cx-commerce/react-components/provider';
import {getSearchResults} from '@oracle-cx-commerce/commerce-utils/selector';
import css from './styles.scss';

const ProductBreadcrumbs = props => {
  const {breadcrumbs} = useSelector(getSearchResults);
  const store = useContext(StoreContext);

  useEffect(() => {
    console.log('---------------BREADCRUMBS-----------------', breadcrumbs);
  }, [breadcrumbs]);

  const onCrumbClick = e => {
    return console.log('------------------LOGcrumb------------------', e.target.value);
  };

  // breadcrumbs.refinementCrumbs[0].removeAction.link   "?N=408944308"

  return (
    <Styled id="ProductBreadcrumbs" css={css}>
      <div className="product-breadcrumbs">
        {breadcrumbs.refinementCrumbs.map(item => {
          return (
            <div
              className="product-breadcrumbs__item"
              key={item.label}
              value={item.removeAction.link}
              onClick={onCrumbClick}
              onKeyDown={onCrumbClick}
              role="button"
              tabIndex={0}
            >
              {item.displayName}: {item.label}
            </div>
          );
        })}
      </div>
    </Styled>
  );
};

export default ProductBreadcrumbs;
