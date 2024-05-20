import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <>
      <div className='text-xl'>HomeLayout</div>
      <section className='align-elements py-20'>
        <Outlet/>
      </section>
    </>

  )
}

export default HomeLayout