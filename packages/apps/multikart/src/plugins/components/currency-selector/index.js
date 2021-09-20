import React, {useContext} from 'react';
import {StoreContext} from '@oracle-cx-commerce/react-ui/contexts';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {connect} from '@oracle-cx-commerce/react-components/provider';
import css from './styles.css';
import {getCurrencyInfo} from '../../selectors';
import {listCurrenciesFetcher} from '../../fetchers';
import {useListCurrenciesFetcher} from '../../fetchers/hooks';
// The server-side rendering framework checks each component for a "fetchers" array
// to determine what actions to take in order to populate the initial state. For this
// component, we need the currency list.
export const fetchers = [listCurrenciesFetcher];
/**
 * The CurrencySelector component.
 *
 * @param {object} props.currencies Array of info about available currencies
 * @param {object} props.selectedCurrency Info about the selected currency
 * @param {string} props.label* Resource strings
 */
const CurrencySelector = ({
  currencies,
  selectedCurrency,
  labelCurrencies,
  labelSelectACurrency,
  labelSelectedCurrency
}) => {
  // Make sure we have the latest currency list during client-side rendering.
  const store = useContext(StoreContext);
  useListCurrenciesFetcher(store);
  // Invoked when the user selects a currency from the
  // select element. Invokes the '_getCurrency' action to
  // update the selected currency with info from the server.
  const onCurrencyChange = event => {
    const repositoryId = event.target.value;
    if (repositoryId) {
      store.action('_getCurrency', {repositoryId});
    }
  };
  // Display a panel with:
  // * a select element with a placeholder and all available currencies
  // * a panel with information about the selected currency

  return (
    <Styled id="CurrencySelector" css={css}>
      <div className="CurrencySelector">
        {currencies && (
          <div>
            <span className="CurrencySelector__Label">{labelCurrencies}</span>
            <select
              value={selectedCurrency && selectedCurrency.repositoryId}
              onChange={onCurrencyChange}
              onBlur={onCurrencyChange}
            >
              <option value="">{labelSelectACurrency}</option>
              {currencies.map(currency => (
                <option key={currency.repositoryId} value={currency.repositoryId}>
                  {currency.displayName}
                </option>
              ))}
            </select>
          </div>
        )}
        {selectedCurrency && (
          <div className="CurrencySelector__SelectedCurrencyInfo">
            {labelSelectedCurrency} {selectedCurrency.displayName}({selectedCurrency.currencyCode})
          </div>
        )}
      </div>
    </Styled>
  );
};
/**
 * Wrap the component with a "connect" object that supplies the state's
 * currency info as props and redisplays the component when any of those
 * props change.
 */

export default connect(getCurrencyInfo)(CurrencySelector);
