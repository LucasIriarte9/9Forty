import "./navbar.css";
import CartWidget from "./cartIcon/cartWidget";
import Brand from "./tituloIcon/brand";
import CategoryList from "./categoryList/categoryList";

function NavBar() {
    return (
        <div className="navbarWrapper">
            <Brand />
            <CategoryList />
            <CartWidget />
        </div>
    )
}
export default NavBar;