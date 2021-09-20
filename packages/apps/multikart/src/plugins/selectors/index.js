/**
 * Selector to extract myRepository from a state object.
 */
export const getMyRepository = state => state.myRepository || {};
/**
 * Selector to extract myRepository.currencyInfo from a state object.
 */
export const getCurrencyInfo = state => getMyRepository(state).currencyInfo || {};
/**
 * Selector to extract myRepository.currencyInfo.currencies from a state object.
 */
export const getCurrencies = state => getCurrencyInfo(state).currencies || {};
