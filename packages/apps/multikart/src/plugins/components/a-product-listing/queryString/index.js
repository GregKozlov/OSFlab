export const getQuerySearchParams = dimensionId => {
  const query = window.location.href;
  const searchParams = new URLSearchParams(query.slice(query.indexOf('?') + 1));

  return {
    N: searchParams.get('N') || dimensionId,
    Ns: searchParams.get('Ns') || '',
    No: searchParams.get('No') || '0',
    Nrpp: searchParams.get('Nrpp') || '10'
  };
};

export const updateHistory = searchParams => {
  const searchString = `?${new URLSearchParams(searchParams).toString()}`;
  window.history.pushState({previous: window.location.href}, '', `${window.location.pathname}${searchString}`);
};
