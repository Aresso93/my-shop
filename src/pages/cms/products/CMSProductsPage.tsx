import { useReducer, useState } from "react"

function ProductsReducer(state:any, action:any){
    if (action.type === 'pending') {
        return {pending: action.payload};      
    }
    
    return state;
}

export function CMSProductsPage() {

    const [state, dispatch] = useReducer(ProductsReducer, { pending: false });

    function getProductsHandler(){
        dispatch({type: 'pending', payload: true})
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