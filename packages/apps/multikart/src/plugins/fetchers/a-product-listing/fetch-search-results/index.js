/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

import {getCategories} from '@oracle-cx-commerce/commerce-utils/selector';
import {getSearchResultsFetcherData} from '@oracle-cx-commerce/fetchers/search/selectors';

/**
 * Fetcher that uses the "assemblerPages" endpoint to fetch search results.
 */
export const fetchSearchResults = async (store, {searchServicePath}) => {
  const {contextId, pageId, pageType} = getSearchResultsFetcherData(store.getState());
  const payload = {url: pageId, searchServicePath};
  /**
   * FIXME: TEMPORARY: If this fetcher is for a category page, look up the
   * dimension id for the category and add it to the payload. Ideally, GS would
   * be able to perform this mapping.
   */
  const isCategoryPage = pageType === 'category' || pageType === 'collection';
  const categoryId = isCategoryPage ? contextId : null;
  if (categoryId) {
    const response = await store.endpoint('getCollection', {categoryId});
    if (response.ok === true) {
      const state = response.delta;
      const category = getCategories(state)[categoryId];
      if (category && category.dimensionId) {
        payload.dimensionId = category.dimensionId;
        const getQuery = new URLSearchParams(payload.url.slice(payload.url.indexOf('?') + 1));

        const urlObj = {
          N: getQuery.get('N') ? getQuery.get('N') : payload.dimensionId,
          Ns: getQuery.get('Ns') || '',
          No: getQuery.get('No') || '0',
          Nrpp: getQuery.get('Nrpp') || '10'
        };
        console.log(urlObj);

        payload.url += `?N=${urlObj.N}&$Ns=${urlObj.Ns}&No=${urlObj.No}&Nrpp=${urlObj.Nrpp}`;
        console.log(payload.url);
      }
    }
  }

  return store.endpoint('search', payload);
};
