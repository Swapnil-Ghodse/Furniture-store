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
    SimpleProduct,
  } from "../pages";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Landing/>,
                errorElement: <Error/>
            },
            {
                path:'products',
                element: <Products/>,
                errorElement: <Error/>
            },
            {
                path:'products/:id',
                element: <Products/>,
                errorElement: <Error/>
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