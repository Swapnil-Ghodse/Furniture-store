import React from "react";
import {Link,  useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils/utils";

function ProductList() {
  const { products } = useLoaderData();


  return (
    <div className="pt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes;
        const dollarPrice = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="p-8 flex rounded-lg flex-col sm:flex-row gap-y-4 flex-wrap bg-base-200 shadow-xl hover:shadow-2xl duration-300 group"
          >
            <img src={image} alt={title} className="h-24 w-24 sm:h-32 sm:w-32 rounded-lg group-hover:scale-105 transition object-cover duration-300" />
            
            <div className="ml-0 sm:ml-16">
                <h3 className="capitilize font-medium text-lg tracking-wider">{title}</h3>
                <h4 className="capitilize text-base text-neutral-content tracking-wider">{company}</h4>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-lg">{dollarPrice}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductList;
