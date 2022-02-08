import React from "react";
import { Link} from "react-router-dom";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from "./StateProvider";
function Header()
{
    const[{basket},dispatch]=useStateValue();
    return(
        <nav className="header">
            {/* logo */}
            <Link to="/">
            <img className="header__logo" src="https://calvinshields.com/wp-content/uploads/2019/04/amazon_PNG11.png" alt="" />
            </Link>
            
            {/* Search  */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>
            
            {/* 3 Links */}
            <div className="header__nav">
                <Link to="/login" className="header__link1">
                    <span className="header__linkLineOne">Hello, Sign in</span>
                    <span className="header__linkLineTwo">Accounts & Lists</span>
                </Link>
                <Link to="/checkout" className="header__link1">
                    <span className="header__linkLineOne">Returns</span>
                    <span className="header__linkLineTwo">& Orders</span>
                </Link>
            {/* basket  */}
            <Link to="/checkout" className="header__basket">
                <ShoppingCartIcon/>
                <span className="header__linkLineTwo header__basketCount">{basket?.length}</span>
            </Link>
            </div>
            
        </nav>
    )
}
export default Header;