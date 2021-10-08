/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useState, useEffect} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {useSelector} from '@oracle-cx-commerce/react-components/provider';
import {getSearchResults} from '@oracle-cx-commerce/commerce-utils/selector';
import FilterContext from '../context';

import css from './styles.scss';

const ProductPagination = props => {
  const {previous, next} = props;
  const {resultsList} = useSelector(getSearchResults);
  const {searchParams, setSearchParams} = useContext(FilterContext);
  const [currentPage, setCurrentPage] = useState(0);

  const pageNumbers = [];
  for (let i = 0; i < Math.ceil(resultsList.totalNumRecs / searchParams.Nrpp); i++) {
    pageNumbers.push(i);
  }

  const onPaginationClick = e => {
    setSearchParams({
      ...searchParams,
      No: e.target.value
    });
    setCurrentPage(searchParams.No);
  };

  const onNextClick = () => {
    return Number(searchParams.No) >= Number(resultsList.totalNumRecs) - Number(searchParams.Nrpp)
      ? null
      : (setSearchParams({...searchParams, No: Number(searchParams.No) + Number(searchParams.Nrpp)}),
        setCurrentPage(searchParams.No));
  };
  const onPrevClick = () => {
    return Number(searchParams.No) <= 0
      ? null
      : (setSearchParams({...searchParams, No: Number(searchParams.No) - Number(searchParams.Nrpp)}),
        setCurrentPage(searchParams.No));
  };

  // useEffect(() => {
  //   setCurrentPage(searchParams.No);
  // }, [currentPage]);

  return (
    <Styled id="ProductPagination" css={css}>
      <div className="product-pagination">
        <button type="button" className="product-pagination__nav" onClick={onPrevClick}>
          {previous}
        </button>
        <div className="product-pagination-pages">
          {pageNumbers.map(item => {
            return (
              <button
                value={item * searchParams.Nrpp}
                onClick={onPaginationClick}
                type="button"
                className={
                  Number(currentPage) === Number(item * Number(searchParams.Nrpp))
                    ? 'product-pagination-pages__item product-pagination-pages__item--active'
                    : 'product-pagination-pages__item'
                }
                key={item}
              >
                {item + 1}
              </button>
            );
          })}
        </div>
        <button type="button" className="product-pagination__nav" onClick={onNextClick}>
          {next}
        </button>
      </div>
    </Styled>
  );
};

export default ProductPagination;
