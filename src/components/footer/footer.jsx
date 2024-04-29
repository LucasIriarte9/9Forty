import "./footer.css";
import Copy from "./copy/copy";
import Contactos from "./contactanos/contactos";
import Redes from "./redes/redes";

function Footer()
{
    return(
        <div className="footer">
            <Contactos/>
            <Copy />
            <Redes/>
        </div>
    )
}

export default Footer;