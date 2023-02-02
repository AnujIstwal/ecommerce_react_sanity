import React from 'react';
import { client } from '../libs/client';
import { HeroBanner, FooterBanner, Product } from '../components/index';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map(prdt => (
          <Product key={prdt._id} product={prdt} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

//This is similar to useEffect for fetching client(next.js uses getServerSideProps)
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;

// https://github.com/adrianhajdin/ecommerce_sanity_stripe
