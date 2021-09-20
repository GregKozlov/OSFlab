import React from 'react';

const CurrencySelector = () => {
  const currencies = [
    {repositoryId: 'c1', displayName: 'Franc', currencyCode: 'FRA'},
    {repositoryId: 'c2', displayName: 'Pound', currencyCode: 'GBP'},
    {repositoryId: 'c3', displayName: 'Yen', currencyCode: 'JPY'}
  ];
  const selectedCurrency = currencies[0];

  return (
    <div>
      {currencies && (
        <div>
          <span>Currencies:</span>
          <select
            value={selectedCurrency && selectedCurrency.repositoryId}
            onChange={event => {
              console.log(`selected ${event.target.value}`);
            }}
            onBlur={() => {}}
          >
            <option value="">Select a currency...</option>
            {currencies.map(currency => (
              <option key={currency.repositoryId} value={currency.repositoryId}>
                {currency.displayName}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedCurrency && (
        <div>
          Selected currency: {selectedCurrency.displayName}({selectedCurrency.currencyCode})
        </div>
      )}{' '}
    </div>
  );
};
export default CurrencySelector;
