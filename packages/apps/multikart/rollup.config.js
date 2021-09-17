const {createBuildConfigs} = require('@oracle-cx-commerce/rollup-config/index');

const options = {
  extraExternals: ['prop-types', 'react-slick'],
  extraReactProperties: ['isValidElement']
}

module.exports = createBuildConfigs(options);
