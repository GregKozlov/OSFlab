import React from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

import css from './styles.scss';

const Fullbleed = props => {
  const {image, altImageText, linkToResource, bannerText, selectedPosition} = props;

  return (
    <Styled id="fullbleed" css={css}>
      <div className="fullbleed">
        <span className={`fullbleed__text + ${selectedPosition}`}>{bannerText}</span>
        <div className="fullbleed__image">
          <a href={linkToResource} aria-label="Link to google.com website">
            <img src={image} alt={altImageText} />
          </a>
        </div>
      </div>
    </Styled>
  );
};

export default Fullbleed;
