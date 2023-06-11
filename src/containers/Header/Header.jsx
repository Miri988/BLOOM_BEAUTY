import { NavLink } from "react-router-dom";
import pagesRoutes from "../../routes/pagesRoutes";

import { CartIcon, SearchIcon, AccountIcon } from "../../assets";

export const Header = () => {
    
    return (
    <header>
        <nav>
            <NavLink to={pagesRoutes.MAIN}>
                <div className="logo">
                    <div className="header">
                        <span className="pink">Bloom</span>&nbsp;Beauty
                    </div>
                </div>
            </NavLink>

            <div className="menu">
                <NavLink to={pagesRoutes.CATALOG} className={'item'}>SHOP</NavLink>
                <NavLink to={pagesRoutes.BESTSELLERS} className={'item'}>BESTSELLERS</NavLink>
                <NavLink to={pagesRoutes.COLLECTION} className={'item'}>COLLECTION</NavLink>
                <NavLink to={pagesRoutes.ABOUTUS} className={'item'}>ABOUT US</NavLink>
                <NavLink to={pagesRoutes.BLOG} className={'item'}>BLOG</NavLink>
            </div>
            <div className="icon menu">
            <NavLink to={pagesRoutes.SEARCH} className={'item'}>
                <SearchIcon className={'image'} />SEARCH
            </NavLink>
            <NavLink to={pagesRoutes.ACCOUNT} className={'item'}>
                <AccountIcon className={'image'} />ACCOUNT
            </NavLink>
            <NavLink
                to={pagesRoutes.CART} className={'item'}>
                <CartIcon className={'image'}/>CART
            </NavLink>
            </div>
            
        </nav>
    </header>
  )
}
