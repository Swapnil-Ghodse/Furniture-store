import { Outlet } from 'react-router-dom'
import {Header, Navbar} from '../components/index'

function HomeLayout() {
  return (
    <>
      <Header />
      <Navbar />
      <section className='align-elements py-20'>
        <Outlet/>
      </section>
    </>

  )
}

export default HomeLayout