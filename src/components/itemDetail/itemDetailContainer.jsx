import React, { useEffect, useState } from 'react'
import { GetProductById } from '../../mock/asyncMock';
import { ItemDetail } from './itemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const id = useParams().id;
    const [item, setItem] = useState(null);

    useEffect(() => {
        GetProductById(Number(id))
            .then((res) => {
                setItem(res);
            })
    }, [])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}
