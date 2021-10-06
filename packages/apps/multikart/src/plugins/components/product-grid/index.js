import React from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {useSelector} from '@oracle-cx-commerce/react-components/provider';
import {getSearchResults} from '@oracle-cx-commerce/commerce-utils/selector';
import ProductTile from '../product-tile';

import css from './styles.scss';

const ProductGrid = props => {
  const {resultsList} = useSelector(getSearchResults);

  return (
    <Styled id="ProductGrid" css={css}>
      <div className="product-grid">
        {resultsList.records.map(item => {
          return (
            <div key={item.records[0].attributes['sku.repositoryId']}>
              <ProductTile
                image={item.records[0].attributes['product.primaryFullImageURL']}
                imageAlt={item.records[0].attributes['product.primaryImageAltText']}
                productLink={item.records[0].attributes['product.baseUrl']}
                productName={item.records[0].attributes['product.primaryImageTitle']}
                productColor={item.records[0].attributes['sku.x_color']}
                productLength={item.records[0].attributes['sku.x_length']}
                productWaist={item.records[0].attributes['sku.x_waist']}
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
