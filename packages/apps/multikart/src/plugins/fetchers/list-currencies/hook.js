import {useEffect} from 'react';
import {isEmptyObject} from '@oracle-cx-commerce/utils/generic';
import {getCurrencies} from '../../selectors';
import {listCurrenciesFetcher} from '..';
/**
 * This hook will invoke the listCurrenciesFetcher if the currency
 * list is not already available in the application state.
 */
export const useListCurrenciesFetcher = store =>
  useEffect(() => {
    if (isEmptyObject(getCurrencies(store.getState()))) {
      listCurrenciesFetcher(store);
    }
  }, [store]);
