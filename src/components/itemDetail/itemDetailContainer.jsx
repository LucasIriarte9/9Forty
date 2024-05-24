import React, { useEffect, useState } from 'react'
import { GetProductById } from '../../mock/asyncMock';
import { ItemDetail } from './itemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc} from "firebase/firestore";
import { db } from '../../firebase/config';

export const ItemDetailContainer = () => {
    const id = useParams().id;
    const [item, setItem] = useState(null);

    //useEffect(() => {
    //    GetProductById(Number(id))
    //        .then((res) => {
    //            setItem(res);
    //        })
    //}, [])

    useEffect(()=>{
        const docRef = doc(db, "productos", id);
        getDoc(docRef).then((resp)=>{
            setItem(
                {...resp.data(), id:resp.id}
            )
        })
    },[id])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}
