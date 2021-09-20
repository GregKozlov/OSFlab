export * from '@oracle-cx-commerce/actions';

export {search as _search} from './search';

export const savePageViewsCount = () => import('./page-views');

/**
 * This module exports references that enable the application's
 * actions to be accessed using dynamic imports.
 */
// By default, all available actions are exported.
export * from '@oracle-cx-commerce/actions';
// Export a reference to our _getCurrency action.
export const _getCurrency = () => import('./get-currency');
