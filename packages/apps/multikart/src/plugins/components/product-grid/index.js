import React, {useState, useEffect} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import ProductTile from '../product-tile';

import css from './styles.scss';

const ProductGrid = props => {
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
    // console.log('----------RESULT----------', result);
  };

  useEffect(() => {
    fetchItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!sortItems) {
    return null;
  }

  return (
    <Styled id="ProductGrid" css={css}>
      <div className="product-grid">
        {sortItems.resultsList.records.map(item => {
          return (
            <div key={item.records[0].attributes['sku.repositoryId']}>
              <ProductTile
                image={item.records[0].attributes['product.primaryFullImageURL']}
                imageAlt={item.records[0].attributes['product.primaryImageAltText']}
                productLink={item.records[0].attributes['product.baseUrl']}
                productName={item.records[0].attributes['product.primaryImageTitle']}
                productId={item.records[0].attributes['sku.repositoryId']}
                productPrice={Number(item.records[0].attributes['product.listPrice']).toFixed(2)}
              />
            </div>
          );
        })}
      </div>
    </Styled>
  );
};

export default ProductGrid;
