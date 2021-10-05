import * as en from './locales/en';
import * as de from './locales/de';
/**
 * Design Studio configuration properties for the WidgetName component.
 */
const config = {
  properties: [
    {
      id: 'configIncludeExtraInfo',
      /**
       * Supported config types:
       *  - stringType
       *  - booleanType
       *  - optionType
       *  - multiSelectOptionType
       *  - sectionTitleType
       *  - collectionType
       *  - mediaType
       */
      type: 'booleanType',
      defaultValue: false,
      labelResourceId: 'includeExtraInfoLabel',
      helpTextResourceId: 'includeExtraInfoHelpText'
    }
  ],
  locales: {
    en: {
      resources: en
    },
    de: {
      resources: de
    }
  }
};

export default config;
