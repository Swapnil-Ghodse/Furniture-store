import {FeaturedProduct, Hero} from '../components/index'
import { customAPI } from '../utils/utils';

const url = '/products?featured=true';

export const loader = async () =>{
  const response = await customAPI(url);
  const products = response.data.data;

  return {products};
}

function Landing() {

  

  return (
    <>
      <Hero />
      <FeaturedProduct />
    </>
  )
}

export default Landing