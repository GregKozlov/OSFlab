import {endpointSaga, takeEvery} from '@oracle-cx-commerce/store/utils';

import {all} from '@redux-saga/core/effects';

export default {
  *saga() {
    yield all([takeEvery('savePageViewsCount', endpointSaga)]);
  }
};
