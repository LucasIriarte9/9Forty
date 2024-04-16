import "./navbar.css";
import CartWidget from "./cartWidget";
import Brand from './brand';
import CategoryList from "./categoryList";

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