import React, {useContext} from 'react';
import Region from '@oracle-cx-commerce/react-components/region';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {getPage, getSearchResults, getCategory} from '@oracle-cx-commerce/commerce-utils/selector';
import {connect} from '@oracle-cx-commerce/react-components/provider';
import {fetchSearchResults} from '@oracle-cx-commerce/fetchers/search/fetch-search-results';
import {useSearchResultsFetcher} from '@oracle-cx-commerce/fetchers/search/fetch-search-results/hook';
import {StoreContext} from '@oracle-cx-commerce/react-ui/contexts';
import css from './styles.scss';

export const fetchers = [fetchSearchResults];

const AProductListing = (props, {contextId, pageId, pageType, searchServicePath}) => {
  const store = useContext(StoreContext);
  useSearchResultsFetcher(store, {contextId, pageId, pageType, searchServicePath});

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
