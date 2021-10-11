/* eslint-disable react-hooks/exhaustive-deps */
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
import {getQuerySearchParams} from './queryString';

export const fetchers = [fetchSearchResults];

const AProductListing = (props, {contextId, pageId, pageType, searchServicePath}) => {
  const store = useContext(StoreContext);
  useSearchResultsFetcher(store, {contextId, pageId, pageType, searchServicePath});
  const {regions = [], configuration = {}} = props;
  const {className = ''} = configuration || {};
  const [searchParams, setSearchParams] = useState({N: '', Ns: '', No: '0', Nrpp: '10'});

  useEffect(() => {
    if (searchParams.N) {
      store.action('search', searchParams);
    }
  }, [searchParams]);

  const queryHandler = () => {
    const newSearchParams = getQuerySearchParams();
    setSearchParams(newSearchParams);
    console.log('------------------newSearchParams---------------------', newSearchParams);
  };

  useEffect(() => {
    window.addEventListener('popstate', queryHandler);

    return () => window.removeEventListener('popstate', queryHandler);
  }, []);

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
