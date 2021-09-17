import React, {useState, useEffect} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import Slider from 'react-slick';
import css from './styles.scss';
import ProductTile from '../product-tile';

const SlickSlider = props => {
  const {productIds} = props;

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
    console.log('--------------------RESULT  Items--------------------', result.items);
    setItems(result);
    console.log('--------------------RESULT--------------------', result);
  };

  useEffect(() => {
    fetchItems();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!items) {
    return <h1>Loading...</h1>;
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <Styled id="Slider" css={css}>
      <div>
        <h2 className="slider-title"> Featured products </h2>
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
              />
            </div>
          ))}
        </Slider>
      </div>
    </Styled>
  );
};

export default SlickSlider;
