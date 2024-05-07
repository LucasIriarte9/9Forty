import { useEffect, useState } from "react";
import { GetProducts } from "../mock/asyncMock";
export default function useProduct() {
    const [products, setProducts] = useState([]);
    const [loading, setIsLoading] = useState(true);
    useEffect(() => {
        GetProducts().then((data) => setProducts(data)).finally(() => setIsLoading(false));
    }, []);
    return { products, loading }
}

