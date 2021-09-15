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
      helpTextResourceId: 'sampleHelpText',
      labelResourceId: 'sampleLabel'
    },
    {
      id: 'altImageText',
      type: 'stringType',
      helpTextResourceId: 'sampleHelpText',
      labelResourceId: 'sampleLabel'
    },
    {
      id: 'linkToResource',
      type: 'stringType',
      helpTextResourceId: 'sampleHelpText',
      labelResourceId: 'sampleLabel'
    },
    {
      id: 'bannerText',
      type: 'stringType',
      helpTextResourceId: 'sampleHelpText',
      labelResourceId: 'sampleLabel'
    },
    {
      id: 'selectedPosition',
      type: 'optionType',
      helpTextResourceId: 'sampleHelpText',
      labelResourceId: 'sampleLabel',
      options: [
        {
          id: 'top',
          value: 'fullbleed__text_top',
          labelResourceId: 'topLabel'
        },
        {
          id: 'bottom',
          value: 'fullbleed__text_bottom',
          labelResourceId: 'bottomLabel'
        }
      ]
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
