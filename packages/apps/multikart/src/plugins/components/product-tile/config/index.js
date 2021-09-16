import * as en from './locales/en';
import * as de from './locales/de';
/**
 * Design Studio configuration properties for the WidgetName component.
 */
const config = {
  properties: [
    {
      id: 'image',
      type: 'stringType',
      helpTextResourceId: 'imageHelpText',
      labelResourceId: 'imageLabel',
      required: true
    },
    {
      id: 'productLink',
      type: 'stringType',
      helpTextResourceId: 'productHelpText',
      labelResourceId: 'productLabel',
      required: true
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
