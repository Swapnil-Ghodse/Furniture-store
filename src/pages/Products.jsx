import { Filter, PaginationContainer, ProductContainer } from "../components";
import { customAPI } from "../utils/utils";

const url = '\products';
export const loader = async ({request}) => {

  const params = Object.fromEntries([...new URL(request.url).searchParams.entries() ]);

  console.log(params);

  const response = await customAPI(url,{
    params: params
  });
  
  const products = response.data.data;
  const meta = response.data.meta;

  return {products, meta, params};
}
function Products() {
  return (<>
      <Filter/>
      <ProductContainer />
      <PaginationContainer />    
    </>)
}

export default Products