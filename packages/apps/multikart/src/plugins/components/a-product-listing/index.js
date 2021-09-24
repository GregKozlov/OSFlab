import React, {useEffect, useState} from 'react';
import Region from '@oracle-cx-commerce/react-components/region';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {getPage, getSearchResults, getCategory} from '@oracle-cx-commerce/commerce-utils/selector';
import {connect} from '@oracle-cx-commerce/react-components/provider';
import css from './styles.css';

const AProductListing = props => {
  const {regions = [], configuration = {}} = props;
  const {className = ''} = configuration || {};

  return (
    <Styled id="Container" css={css}>
      <section className={`Container__Section ${className}`}>
        {regions.map(regionId => (
          <Region key={regionId} regionId={regionId} />
        ))}
      </section>
    </Styled>
  );
};

export default connect(getCategory)(connect(getSearchResults)(connect(getPage)(AProductListing)));
