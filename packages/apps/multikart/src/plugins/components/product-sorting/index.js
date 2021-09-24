import React, {useEffect, useState} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

import css from './styles.scss';

const ProductSorting = props => {
  const searchParams = {N: '', Ns: '', No: '0', Nrpp: '12'};

  const fetchQueryString = Object.keys(searchParams)
    .map(k => `${k}=${searchParams[k]}`)
    .join('&');

  const [sortItems, setSortItems] = useState();

  const fetchItems = async () => {
    const data = await fetch(`/ccstore/v1/search?${fetchQueryString}`, {
      categoryId: 'c20001'
    });
    const result = await data.json();
    setSortItems(result);
    console.log('----------RESULT----------', result);
  };

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!sortItems) {
    return null;
  }

  return (
    <Styled id="OptionsTab" css={css}>
      <div className="option-tab">
        <div className="option-tab-sort">
          <h3>Sort By</h3>
          <div>
            <select name="ascDesc" id="">
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        <div className="option-tab__refine-label">
          <h3>Refine By:</h3>
        </div>

        <hr />

        <div className="option-tab-price">
          <h4>{sortItems.navigation.navigation[0].displayName}</h4>
          <div>
            {sortItems.navigation.navigation[0].refinements.map(item => {
              return (
                <label htmlFor={item.label} key={item.label}>
                  <input id={item.label} value={item.label} type="checkbox" />
                  {item.label}
                </label>
              );
            })}
          </div>
        </div>

        <hr />

        <div className="option-tab-color">
          <h4>{sortItems.navigation.navigation[1].displayName}</h4>
          <div>
            {sortItems.navigation.navigation[1].refinements.map(item => {
              return (
                <label htmlFor={item.label} key={item.label}>
                  <input id={item.label} value={item.label} type="checkbox" />
                  {item.label}
                </label>
              );
            })}
          </div>
        </div>

        <hr />

        <div className="option-tab-length">
          <h4>{sortItems.navigation.navigation[2].displayName}</h4>
          <div>
            {sortItems.navigation.navigation[2].refinements.map(item => {
              return (
                <label htmlFor={item.label} key={item.label}>
                  <input id={item.label} value={item.label} type="checkbox" />
                  {item.label}
                </label>
              );
            })}
          </div>
        </div>

        <hr />

        <div className="option-tab-waist">
          <h4>{sortItems.navigation.navigation[3].displayName}</h4>
          <div>
            {sortItems.navigation.navigation[3].refinements.map(item => {
              return (
                <label htmlFor={item.label} key={item.label}>
                  <input id={item.label} value={item.label} type="checkbox" />
                  {item.label}
                </label>
              );
            })}
          </div>
        </div>
      </div>
    </Styled>
  );
};

export default ProductSorting;
