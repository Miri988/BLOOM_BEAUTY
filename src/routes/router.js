import { createBrowserRouter } from "react-router-dom";

import { Main } from "../pages/Main/Main";
import { Catalog } from "../pages/Catalog/Catalog";
import { ProductCard } from "../pages/ProductCard/ProductCard";
import { Blog } from "../pages/Blog/Blog";
import { BlogPost } from "../pages/BlogPost/BlogPost";
import { AboutUs } from "../pages/AboutUs/AboutUs";
import { Bestsellers } from "../pages/Bestsellers/Bestsellers";
import { Collection } from "../pages/Collection/Collection";
import { Account } from "../pages/Account/Account";
import { Search } from "../pages/Search/Search";
import { Cart } from "../pages/Cart/Cart";

import { Header } from "../containers/Header/Header";
import { Footer } from "../containers/Footer/Footer";

import pagesRoutes from "../routes/pagesRoutes";


export const router = createBrowserRouter([
    {
      path: pagesRoutes.MAIN,
      element: (
               <>
                  <Header/>
                  <Main/>
                  <Footer/>
              </>
      ),
    },
    {
      path: pagesRoutes.CATALOG,
      element: (
               <>
                  <Header/>
                  <Catalog/>
                  <Footer/>
              </>
      ),
    },
    {
      path: pagesRoutes.PRODUCTCARD,
      element: (
               <>
                  <Header/>
                  <ProductCard/>
                  <Footer/>
              </>
      ),
    },
    {
      path: pagesRoutes.BLOG,
      element: (
               <>
                  <Header/>
                  <Blog/>
                  <Footer/>
               </>
      ),
    },
    {
      path: pagesRoutes.BLOGPOST,
      element: (
               <>
                  <Header/>
                  <BlogPost/>
                  <Footer/>
               </>
      ),
    },
    {
      path: pagesRoutes.ABOUTUS,
      element: (
               <>
                  <Header/>
                  <AboutUs/>
                  <Footer/>
               </>
      ),
    },
    {
        path: pagesRoutes.BESTSELLERS,
        element: (
                 <>
                    <Header/>
                    <Bestsellers/>
                    <Footer/>
                 </>
        ),
      },
      {
        path: pagesRoutes.COLLECTION,
        element: (
                 <>
                    <Header/>
                    <Collection/>
                    <Footer/>
                 </>
        ),
      },
      {
        path: pagesRoutes.SEARCH,
        element: (
                 <>
                    <Header/>
                    <Search/>
                    <Footer/>
                 </>
        ),
      },
      {
        path: pagesRoutes.ACCOUNT,
        element: (
                 <>
                    <Header/>
                    <Account/>
                    <Footer/>
                 </>
        ),
      },
      {
        path: pagesRoutes.CART,
        element: (
                 <>
                    <Header/>
                    <Cart/>
                    <Footer/>
                 </>
        ),
      }, 
  ]);