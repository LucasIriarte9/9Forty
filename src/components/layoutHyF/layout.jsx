import Footer from "../footer/footer"
import NavBar from "../navBar/navBar"

const Layout = (props) => {
    return (
        <div>
            <NavBar />
            {props.children}
            <Footer />
        </div>
    )
}
export default Layout;