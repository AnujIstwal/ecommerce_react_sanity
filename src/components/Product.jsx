import React from 'react';
import Link from 'next/link';
//fontawesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

import { urlFor } from '../libs/client';

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">
            <FontAwesomeIcon icon={faIndianRupeeSign} /> {price}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
