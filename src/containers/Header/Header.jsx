import { NavLink, useLocation } from "react-router-dom";
import pagesRoutes from "../../routes/pagesRoutes";

import { CartIcon } from "../../assets";
import { SearchIcon } from "../../assets";
import { AccountIcon } from "../../assets";

export const Header = () => {
    const location = useLocation();
    
    return (
    <header>

    <nav className="menu">
        
        <NavLink 
            to={pagesRoutes.MAIN}
            className={pagesRoutes.MAIN === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
                <div className="main">
                    <span className = "pink">BLOOM </span>
                    <span>BEAUTY</span>
                </div>
           
        </NavLink>

        <div className="link_pages">

        <NavLink
            to={pagesRoutes.CATALOG}
            className={pagesRoutes.CATALOG === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
            SHOP
        </NavLink>
        <NavLink
            to={pagesRoutes.BESTSELLERS}
            className={pagesRoutes.BESTSELLERS === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
            BESTSELLERS
        </NavLink>
        <NavLink
            to={pagesRoutes.COLLECTION}
            className={pagesRoutes.COLLECTION === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
            COLLECTION
        </NavLink>
        <NavLink
            to={pagesRoutes.ABOUTUS}
            className={pagesRoutes.ABOUTUS === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
            ABOUT US
        </NavLink>
        <NavLink
            to={pagesRoutes.BLOG}
            className={pagesRoutes.BLOG === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
            BLOG
        </NavLink>
        </div>
        <div className="link_icon">
        <NavLink
            to={pagesRoutes.SEARCH}
            className={pagesRoutes.SEARCH === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
                <SearchIcon/>
            SEARCH
        </NavLink>
        <NavLink
            to={pagesRoutes.ACCOUNT}
            className={pagesRoutes.ACCOUNT === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
                <AccountIcon/>
            ACCOUNT
        </NavLink>
        <NavLink
            to={pagesRoutes.CART}
            className={pagesRoutes.CART === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
                <CartIcon/>
            CART
        </NavLink>
        </div>
        
    </nav>
    </header>
  )
}
