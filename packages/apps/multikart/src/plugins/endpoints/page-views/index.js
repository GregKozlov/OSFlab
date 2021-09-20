import {createEndpoint} from '@oracle-cx-commerce/endpoints/factory';

export const processInput = payload => {
  return {body: payload};
};

export default createEndpoint('savePageViewsCount', {
  processInput
});
