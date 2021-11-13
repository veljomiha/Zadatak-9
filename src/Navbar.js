import imgLogo from "./img/logo.png";
import {Link} from "react-router-dom";

const Navbar = (props) =>{
    return(
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <Link to="/">
                        <img src={imgLogo} alt="logo" />
                    </Link>
                </div>

                {/* <div className="search-bar" > */}
                    {/* <input type="text" id="" placeholder="Search mobile..."/> */}
                {/* </div> */}

                <Link to="cart">
                    <div className="shopping-cart">
                        {props.countCartItems ? (<div className="cart-count">{props.countCartItems}</div>) : (<div className="cart-count">0</div>)}
                    </div>
                </Link>
      
            </div>
        </nav>
    )
}

export default Navbar;