import { Link, useLoaderData, useParams } from "react-router-dom";
import { formatPrice, customAPI, generateAmountOption } from "../utils/utils";
import { useState } from "react";

export const loader = async ({ params }) => {
  const productData = await customAPI(`/products/${params.id}`);
  // console.log(params.id);
  return { product: productData.data.data };
};

function SingleProduct() {
  const product = useLoaderData();
  const { image, description, title, price, colors, company } =
    product.product.attributes;

  const [productColor, setProductColor] = useState(colors[0]);
  const [productAmount, setProductAmount] = useState(1);

  const handleAmount = (e) =>{
    setProductAmount(e.target.value);
  }
  const dollarAmount = formatPrice(price);
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
        </ul>
      </div>
      {/* Product  */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        ></img>
        {/* Product Info */}
        <div className="">
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className=" text-xl mt-3 text-neutral-content">{dollarAmount}</p>
          <p className=" text-base mt-6 leading-8 text-neutral-content">
            {description}
          </p>

          <div className="mt-6">
            <h4 className="text-md font-medium tracking-wider capitalize">
              colors
            </h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ background: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>

          {/* Amount */}
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="text-md font-medium tracking-wider capitalize">
                Amount
              </h4>
            </label>
            <select
              className="select select-secondary select-bordered select-md"
              id="amount"
              value={productAmount}
              onChange={handleAmount}
            >
            {
              generateAmountOption(20)
            }
            </select>
          </div>
          {/* Add to cart button */}
          <div className="mt-10">
            <button className="btn btn-secondary btn-md">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
