import { Filter, PaginationContainer, ProductContainer } from "../components";

export const loader = async ({request}) => {
  return null;
}
function Products() {
  return (<>
      <Filter/>
      <ProductContainer />
      <PaginationContainer />    
    </>)
}

export default Products