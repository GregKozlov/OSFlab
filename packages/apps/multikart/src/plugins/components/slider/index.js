import React, {useState, useEffect} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import Slider from 'react-slick';
import css from './styles.scss';
import ProductTile from '../product-tile';

const SlickSlider = props => {
  const {
    productIds,
    title,
    loading,
    shownInFullSize,
    shownInWideScreen,
    shownInMediumScreen,
    shownInSmallScreen,
    qty,
    each,
    addToCart
  } = props;

  const params = {
    productIds,
    fields: [
      'smallImageURLs',
      'id',
      'listPrices',
      'salePrices',
      'primaryImageAltText',
      'repositoryId',
      'route',
      'seoKeywordsDerived',
      'displayName'
    ]
  };

  const fetchQueryString = Object.keys(params)
    .map(k => `${k}=${params[k]}`)
    .join('&');

  const [items, setItems] = useState();

  const fetchItems = async () => {
    const data = await fetch(`/ccstore/v1/products?${fetchQueryString}`);
    const result = await data.json();
    setItems(result);
  };

  useEffect(() => {
    fetchItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!items) {
    return <h1>{loading}</h1>;
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: parseInt(shownInFullSize, 10),
    slidesToScroll: parseInt(shownInFullSize, 10),
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: parseInt(shownInWideScreen, 10),
          slidesToScroll: parseInt(shownInWideScreen, 10),
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: parseInt(shownInMediumScreen, 10),
          slidesToScroll: parseInt(shownInMediumScreen, 10),
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: parseInt(shownInSmallScreen, 10),
          slidesToScroll: parseInt(shownInSmallScreen, 10),
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <Styled id="Slider" css={css}>
      <div>
        <h2 className="slider-title">{title}</h2>
        <Slider {...settings} className="slider">
          {items.items.map(item => (
            <div key={item.id}>
              <ProductTile
                image={item.smallImageURLs[0]}
                imageAlt={item.primaryImageAltText}
                productLink={item.route}
                productName={item.displayName}
                productId={item.id}
                productPrice={item.listPrices.defaultPriceGroup}
                qty={qty}
                each={each}
                addToCart={addToCart}
              />
            </div>
          ))}
        </Slider>
      </div>
    </Styled>
  );
};

export default SlickSlider;
