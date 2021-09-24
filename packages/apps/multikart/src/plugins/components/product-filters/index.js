import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */
import {t} from '@oracle-cx-commerce/utils/generic';

import css from './styles.css';

const ProductFilters = props => {
  return (
    <Styled id="ProductFilters" css={css}>
      <div className="ProductFilters"> Base Component ProductFilters: {t('Hello')}</div>
    </Styled>
  );
};

export default ProductFilters;
