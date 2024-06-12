import { useLoaderData } from "react-router-dom";
import ProductGrid from "./ProductGrid"
import ProductList from "./ProductList"
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

function ProductContainer() {
  const {meta} = useLoaderData();
  const [layout, setLayout] = useState('grid');
  const totalProducts = meta.pagination.total;

  const setLayoutStyle = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
      ? 'btn-primary text-primary-content'
      : 'btn-ghost text-base-content'
    }`
  }


  return (
    <>
      {/* Header */}
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-base">
          {totalProducts} product{ totalProducts > 1 && 's'}
        </h4>
        <div className="flex gap-x-2">
          <button type="button" onClick={()=>setLayout('grid')} className={setLayoutStyle('grid')}><BsFillGridFill /></button>
          <button type="button" onClick={()=>setLayout('list')} className={setLayoutStyle('list')}><BsList /></button>
        </div>
      </div>
      <div className="transition duration-1000 ease-in-out">
      { totalProducts === 0 ? "Apologies, No products matched your preferences!"
          : layout === 'grid' ? <ProductGrid /> : <ProductList />
        }
      
      </div>
      
    </>
  )
}

export default ProductContainer