import {Link} from "react-router-dom";
import "./brand.css";

function Brand()
{
    return(
        <div>
            <Link to={"/"} className="titulo"><h1>9Forty</h1></Link>
        </div>
    );
}

export default Brand;