/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

import {fetchSearchResults} from '@oracle-cx-commerce/fetchers/search';
import {getSearchResults} from '@oracle-cx-commerce/commerce-utils/selector';
import {isEmptyObject} from '@oracle-cx-commerce/utils/generic';
import {useEffect} from 'react';

/**
 * A useEffect hook to use the fetchSearchResults fetcher during
 * client-side rendering.
 */
export const useSearchResultsFetcher = (store, {contextId, pageId, pageType, searchServicePath}) => {
  return useEffect(() => {
    if (isEmptyObject(getSearchResults(store.getState()))) {
      fetchSearchResults(store, {searchServicePath});
    }
  }, [contextId, pageId, pageType, store, searchServicePath]);
};
