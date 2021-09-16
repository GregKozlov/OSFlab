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
      id: 'linkToResource',
      type: 'stringType',
      helpTextResourceId: 'resourceHelpText',
      labelResourceId: 'resourceLabel',
      required: true
    },
    {
      id: 'selectedPosition',
      type: 'optionType',
      helpTextResourceId: 'selectedHelpText',
      labelResourceId: 'selectedLabel',
      options: [
        {
          id: 'top',
          value: 'fullbleed__text_top',
          labelResourceId: 'selectedTopLabel'
        },
        {
          id: 'bottom',
          value: 'fullbleed__text_bottom',
          labelResourceId: 'selectedBottomLabel'
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
