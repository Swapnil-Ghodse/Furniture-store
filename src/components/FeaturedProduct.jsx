import SectionTitle from "./SectionTitle";
import ProductGrid from "./ProductGrid";

function FeaturedProduct() {
  return (
    <div className='pt-24'>
        <SectionTitle title={'feature products'} />
        <ProductGrid />
    </div>
  )
}

export default FeaturedProduct