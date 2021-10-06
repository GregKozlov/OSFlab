import React, {useContext, useState, useEffect} from 'react';
import Region from '@oracle-cx-commerce/react-components/region';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {getPage, getSearchResults, getCategory} from '@oracle-cx-commerce/commerce-utils/selector';
import {connect} from '@oracle-cx-commerce/react-components/provider';
import {fetchSearchResults} from '@oracle-cx-commerce/fetchers/search/fetch-search-results';
import {useSearchResultsFetcher} from '@oracle-cx-commerce/fetchers/search/fetch-search-results/hook';
import {StoreContext} from '@oracle-cx-commerce/react-ui/contexts';
import css from './styles.scss';
import FilterContext from '../context';

export const fetchers = [fetchSearchResults];

const AProductListing = (props, {contextId, pageId, pageType, searchServicePath}) => {
  const store = useContext(StoreContext);
  useSearchResultsFetcher(store, {contextId, pageId, pageType, searchServicePath});

  const {regions = [], configuration = {}} = props;
  const {className = ''} = configuration || {};

  const [searchParams, setSearchParams] = useState({N: '', Ns: '', No: '0', Nrpp: '12'});

  const globalChangeHandler = () => {
    if (searchParams) {
      store.action('search', searchParams);
    }
  };

  useEffect(() => {
    globalChangeHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <Styled id="Container" css={css}>
      <FilterContext.Provider value={{searchParams, setSearchParams}}>
        <section className={`Container__Section ${className}`}>
          {regions.map(regionId => (
            <Region key={regionId} regionId={regionId} />
          ))}
        </section>
      </FilterContext.Provider>
    </Styled>
  );
};

export default connect(getCategory)(connect(getSearchResults)(connect(getPage)(AProductListing)));
