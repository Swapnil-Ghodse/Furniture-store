import { Form, Link, useLoaderData } from "react-router-dom"
import FormInput from "./FormInput"
import FormSelect from "./FormSelect"
import FormRange from "./FormRange";
import FormCheckBox from "./FormCheckBox";

function Filter() {
  const {meta} = useLoaderData();

  return (
    <Form className=" bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grod-cols-3 lg:grid-cols-4 items-center">

    {/* Search */}
    <FormInput 
      type={'search'}
      placeholder={'search'}
      name={'search'}
      size={'input-sm'}
      label={'Search'}
    />
    {/* Categories */}
    <FormSelect label={'Select Category'} size={'select-sm'} name={'category'} list={meta.categories} />
    {/* Company */}
    <FormSelect label={'Select Company'} size={'select-sm'} name={'company'} list={meta.companies} />
    {/* Order */}
    <FormSelect label={'Select Order'} size={'select-sm'} name={'order'} list={['a-z', 'z-a', 'High', 'Low']} />
    {/* price range */}
    <FormRange label={'Select Price'} size={'range-sm'} name={'price'} minRange={0} maxRange={100000} />
    {/* Checkbox */}
    <FormCheckBox label='Free Shipping' size={'checkbox-sm'} name={'shipping'} />
    {/* Button */}
    <button type="submit" className="btn btn-primaryb btn-sm">Search</button>
    <Link to='/product' className="btn btn-accent btn-sm" >Reset</Link>
    </Form>
  )
}

export default Filter