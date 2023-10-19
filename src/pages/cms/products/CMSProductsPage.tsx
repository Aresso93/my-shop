import { useReducer, useState } from "react"
import {pb} from '../../../pocketbase'
import { Product } from "@/model/product";

function ProductsReducer(state:any, action:any){
    console.log(action);
    
    switch (action.type) {
        case 'pending': 
            return {pending: action.payload}     
    }
    
    return state;
}

export const initialState = { pending: false, products: [] }

export function CMSProductsPage() {

    const [state, dispatch] = useReducer(ProductsReducer, initialState);

    async function getProductsHandler(){
        dispatch({type: 'pending', payload: true});
        const res = await pb.collection('products').getList<Product>();
        dispatch({type:'getProductSuccess', payload: res.items})
        
    }
    console.log(state);
    

    return (
        <div>
            <h1 className="title">CMS</h1>
            Pagina prodotti

            <hr className="my-8"/>
            <button className="btn primary" onClick={getProductsHandler}>GET</button>
        </div>
    )
}