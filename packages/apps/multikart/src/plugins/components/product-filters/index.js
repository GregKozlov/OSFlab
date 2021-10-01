import React, {useState, useEffect} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import Collapsible from '@oracle-cx-commerce/react-components/collapsible';

import css from './styles.scss';

const ProductFilters = props => {
  const searchParams = {N: '', Ns: '', No: '0', Nrpp: '12'};

  const fetchQueryString = Object.keys(searchParams)
    .map(key => `${key}=${searchParams[key]}`)
    .join('&');

  const [sortItems, setSortItems] = useState();

  const fetchItems = async () => {
    const data = await fetch(`/ccstore/v1/search?${fetchQueryString}`, {
      categoryId: 'c20001'
    });
    const result = await data.json();
    setSortItems(result);
  };

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!sortItems) {
    return null;
  }

  return (
    <Styled id="ProductFilters" css={css}>
      <div className="product-filters">
        <h3 className="product-filters__heading">Refine By:</h3>

        <div className="product-filters-section">
          <Collapsible title={<h4>{sortItems.navigation.navigation[0].displayName}</h4>}>
            <div className="product-filters-section__price">
              {sortItems.navigation.navigation[0].refinements.map(item => {
                return (
                  <label htmlFor={item.link} key={item.link}>
                    <input id={item.link} value={item.label} type="checkbox" />
                    {item.label}
                  </label>
                );
              })}
            </div>
          </Collapsible>

          <Collapsible title={<h4>{sortItems.navigation.navigation[1].displayName}</h4>}>
            <div className="product-filters-section__color">
              {sortItems.navigation.navigation[1].refinements.map(item => {
                return (
                  <label htmlFor={item.link} key={item.link}>
                    <input id={item.link} value={item.label} type="checkbox" />
                    {item.label}
                  </label>
                );
              })}
            </div>
          </Collapsible>

          <Collapsible title={<h4>{sortItems.navigation.navigation[2].displayName}</h4>}>
            <div className="product-filters-section__length">
              {sortItems.navigation.navigation[2].refinements.map(item => {
                return (
                  <label htmlFor={item.link} key={item.link}>
                    <input id={item.link} value={item.label} type="checkbox" />
                    {item.label}
                  </label>
                );
              })}
            </div>
          </Collapsible>

          <Collapsible title={<h4>{sortItems.navigation.navigation[3].displayName}</h4>}>
            <div className="product-filters-section__waist">
              {sortItems.navigation.navigation[3].refinements.map(item => {
                return (
                  <label htmlFor={item.link} key={item.link}>
                    <input id={item.link} value={item.label} type="checkbox" />
                    {item.label}
                  </label>
                );
              })}
            </div>
          </Collapsible>
        </div>
      </div>
    </Styled>
  );
};

export default ProductFilters;
