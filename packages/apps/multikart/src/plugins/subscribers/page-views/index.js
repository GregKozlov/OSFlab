export default ({endpoint, subscribeDispatch}) => {
  return subscribeDispatch(action => {
    const {type} = action;

    if (type === 'getPageState') {
      endpoint('savePageViewsCount', {
        pageViews: 1
      });
    }
  });
};
