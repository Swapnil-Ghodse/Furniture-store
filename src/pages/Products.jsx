import { Filter, PaginationContainer, ProductContainer } from "../components";
import { customAPI } from "../utils/utils";

const url = '\products';
export const loader = async ({request}) => {
  const response = await customAPI(url);
  
  const products = response.data.data;
  const meta = response.data.meta;

  return {products, meta};
}
function Products() {
  return (<>
      <Filter/>
      <ProductContainer />
      <PaginationContainer />    
    </>)
}

export default Products