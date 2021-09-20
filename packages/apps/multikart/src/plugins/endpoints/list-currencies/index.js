import {createEndpoint, getBodyAsJson} from '@oracle-cx-commerce/endpoints/factory';
import {populateError} from '@oracle-cx-commerce/endpoints/utils';
/**
 * Adapter for the _listCurrencies endpoint.
 */
export default createEndpoint('listCurrencies', {
  /**
   * Perform any necessary extra processing on the payload object that is
   * included when dispatching an action that invokes this endpoint.
   *
   * @param {object} payload The action payload
   *
   * @return {object} Object with extra info to be included with endpoint request
   */
  processInput() {
    // Include a query parameter that limits the set of returned property values.
    return {
      query: {fields: 'repositoryId,displayName'}
    };
  },
  /**
   * Convert the response from the endpoint invocation into an object
   * to be merged into the application state.
   *
   * @param {object} response The response from the endpoint call
   *
   * @return {object} An object to be merged into the application state
   */
  async processOutput(response) {
    const json = await getBodyAsJson(response);
    // Store the response "items" array under myRepository.currencyInfo.currencies.

    return response.ok
      ? {
          myRepository: {
            currencyInfo: {
              currencies: json.items
            }
          }
        }
      : populateError(response, json);
  }
});
