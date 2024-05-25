import { createBrowserRouter } from "react-router-dom";
import {
    About,
    Cart,
    Checkout,
    Error,
    HomeLayout,
    Landing,
    Login,
    Orders,
    Products,
    Register,
    SingleProduct,
  } from "../pages";

import { ErrorElement } from "../components";

//loader
import { loader as landingLoader } from "../pages/Landing";
import {loader as singlepageLoader} from '../pages/SingleProduct';
import {loader as productsPageLoader} from '../pages/Products';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Landing/>,
                errorElement: <ErrorElement/>,
                loader: landingLoader,
            },
            {
                path:'products',
                element: <Products/>,
                errorElement: <Error/>,
                loader: productsPageLoader
            },
            {
                path:'products/:id',
                element: <SingleProduct />,
                errorElement: <ErrorElement />,
                loader: singlepageLoader, 
            },
            {
                path:'cart',
                element: <Cart/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'checkout',
                element:<Checkout/>
            },
            {
                path: 'order',
                element:<Orders/>
            }
        ]
    },
    {
        path: '/login',
        element:<Login/>,
        errorElement: <Error/>
    },
    {
        path:'/register',
        element: <Register/>,
        errorElement: <Error/>
    }
]);

export default Router;