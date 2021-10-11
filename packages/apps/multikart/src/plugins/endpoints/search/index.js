/*
 ** Copyright (c) 2019 Oracle and/or its affiliates.
 */

import {createEndpoint, getBodyAsJson} from '@oracle-cx-commerce/endpoints/factory';
import {getCurrentPageId, getSearchResults} from '@oracle-cx-commerce/commerce-utils/selector';
import {populateError} from '@oracle-cx-commerce/endpoints/utils';

export * from '@oracle-cx-commerce/endpoints';

/**
 * Perform any necessary extra processing on the payload object that is
 * included when dispatching an action that invokes this endpoint.
 */
export const processInput = (payload, state) => {
  // The supported payload properties are:
  // * url: A Guided Search URL that can include a path and a set of query parameters.
  // * getNextPage: If set to "true", use the paging action template for the
  // existing search results in order to get the next page of results.
  // * dimensionId: A dimension id to be used for constructing a path.
  // * searchServicePath: The path of the search service to be used.
  const {url, dimensionId, getNextPage, searchServicePath} = payload;

  // Base URL for the search endpoint.
  let searchUrl = searchServicePath || 'Default/osf/catalog';

  // The query parameters are initially undefined.
  let query;

  if (getNextPage) {
    // If loading beyond the first page of results, use pagingActionTemplate to maintain navigation state.
    const searchResults = getSearchResults(state);
    if (searchResults && searchResults.results) {
      const {lastRecNum, pagingActionTemplate, recsPerPage} = searchResults.results;
      if (pagingActionTemplate && pagingActionTemplate.link) {
        searchUrl += pagingActionTemplate.link
          .replace('%7Boffset%7D', lastRecNum)
          .replace('%7BrecordsPerPage%7D', recsPerPage);
      }
    }
  } else if (url) {
    // If the URL string includes a query portion, convert it to an object
    // containing key-value pairs, as required by the caller.
    const queryIndex = url.indexOf('?');
    if (queryIndex !== -1) {
      query = Object.fromEntries(new URLSearchParams(url.substring(queryIndex + 1)));
    }

    if (dimensionId) {
      // For a dimension ID, append a path using the specific format shown below.
      searchUrl += `/_/N-${dimensionId}`;
    } else {
      // Determine if non-query portion of the given URL includes an extra path, by
      // stripping off the first component (which corresponds to the page route),
      // along with its two enclosing forward-slashes.
      // (e.g. Replace '/search/_/N-1234' with '_/N-1234')
      const path = query ? url.substring(0, queryIndex) : url;
      const extraPath = path.replace(/^\/.*?\//, '');
      if (extraPath) {
        searchUrl += `/${extraPath}`;
      }
    }
  } else {
    // As a convenience: if none of the above criteria are met, we assume
    // that the entire payload comprises query parameters.
    query = {...payload};
  }

  // For this endpoint, the REST API URL is "/ccstore/v1/assembler/pages/{}", and
  // we have to fill in the {} parameter with the search URL and also supply an
  // object containing any query parameters.
  return {
    params: [searchUrl],
    query
  };
};

/**
 * Convert the response from the endpoint invocation into an object
 * to be merged into the application state.
 */
export const processOutput = async (response, state) => {
  const json = await getBodyAsJson(response);
  const pageId = getCurrentPageId(state);

  if (response.ok) {
    const searchResults = {...json};

    return {searchRepository: {pages: {[pageId]: searchResults}}};
  }

  return populateError(response, json);
};

/**
 * Endpoint adapter for the 'search' action.
 * This maps the action to an 'assemblerPages' endpoint invocation.
 */
export default createEndpoint('search', {
  processInput,
  processOutput
});
