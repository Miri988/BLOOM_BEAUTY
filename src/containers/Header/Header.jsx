import { NavLink, useLocation } from "react-router-dom";
import pagesRoutes from "../../routes/pagesRoutes";



export const Header = () => {
    const location = useLocation();
    
    return (
    <header>
    <h3>Header</h3>
    <nav>
        <NavLink
            to={pagesRoutes.MAIN}
            className={pagesRoutes.MAIN === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
            BLOOM BEAUTY
        </NavLink> {" "}
        <NavLink
            to={pagesRoutes.CATALOG}
            className={pagesRoutes.CATALOG === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
            SHOP
        </NavLink>{" "}
        <NavLink
            to={pagesRoutes.BESTSELLERS}
            className={pagesRoutes.BESTSELLERS === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
            BESTSELLERS
        </NavLink>{" "}
        <NavLink
            to={pagesRoutes.COLLECTION}
            className={pagesRoutes.COLLECTION === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
            COLLECTION
        </NavLink>{" "}
        <NavLink
            to={pagesRoutes.ABOUTUS}
            className={pagesRoutes.ABOUTUS === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
            ABOUT US
        </NavLink>{" "}
        <NavLink
            to={pagesRoutes.BLOG}
            className={pagesRoutes.BLOG === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
            BLOG
        </NavLink>{" "}
        <NavLink
            to={pagesRoutes.ACCOUNT}
            className={pagesRoutes.ACCOUNT === location.pathname ? "active" : ""}
            /* className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            } */
            >
            ACCOUNT
        </NavLink>{" "}

    </nav>
    </header>
  )
}
