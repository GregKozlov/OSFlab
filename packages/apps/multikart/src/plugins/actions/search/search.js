import {endpointSaga, takeLatest} from '@oracle-cx-commerce/store/utils';

export default {
  *saga() {
    yield takeLatest('search', endpointSaga);
  }
};
