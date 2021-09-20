import {endpointSaga, takeLatest} from '@oracle-cx-commerce/store/utils';
/**
 * The _getCurrency action.
 *
 * This exports an object with a generator function named "saga", whose presence
 * signals OSF to pass the generator function to Redux-Saga's middleware.run API
 * the first time the action is dispatched via the store API.
 *
 * The generator function results in an asynchronous endpoint invocation
 * when the action is dispatched.
 */
export default {
  *saga() {
    yield takeLatest('_getCurrency', endpointSaga);
  }
};
