import React from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */
// import {t} from '@oracle-cx-commerce/utils/generic';

import css from './styles.css';

const HelloWorld = props => {
  const {helloWorld} = props;

  return (
    <Styled id="HelloWorld" css={css}>
      <div className="HelloWorld">{helloWorld}</div>
    </Styled>
  );
};

export default HelloWorld;
