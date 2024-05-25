import { Link } from "react-router-dom";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero3.webp";

function Hero() {

    const carouseImages = [hero1, hero2, hero3, hero4];

  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center" >
      <div>
        <h1 className="max-w-2xl text-4xl sm:text-6xl font-bold capitalize">we are please to enhance your living experience</h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          vestibulum ante at neque interdum fermentum. Etiam porttitor auctor
          mi, et hendrerit metus finibus a. Aliquam tincidunt bibendum lorem sed
          pharetra.
        </p>
        <div className="mt-10">
            <Link to={'/product'} className="btn btn-primary">Our Products</Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {
            carouseImages.map( (image, index) =>{
                return <div key={image} className=" carousel-item">
                    <img src={image} className=" rounded-box h-full w-80 object-cover" />
                </div>
            })
        }
      </div>
    </div>
  );
}

export default Hero;
