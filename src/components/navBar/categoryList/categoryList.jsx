import "./list.css";
import { NavLink } from "react-router-dom"

const Mis_rutas = [
    {
        path: "/productos",
        label: "Productos",
    },
    {
        path: "/gorras",
        label: "Gorras",
    },
    {
        path: "/remeras",
        label: "Remeras",
    },
    {
        path: "/zapatillas",
        label: "Zapatillas",
    },
];
function CategoryList() {
    return (
        <ul className="list">
            {Mis_rutas.map((ruta) => (
                <li>
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to={ruta.path}>{ruta.label}</NavLink>
                </li>
            ))}
        </ul>
    );
}
export default CategoryList;